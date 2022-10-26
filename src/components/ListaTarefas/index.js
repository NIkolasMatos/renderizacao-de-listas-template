import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState([
    "estudar",
    "fazer ecxercício",
    "descansar",
  ]); //criei a lista aqui

  const [novaTarefa, setNovaTarefa] = useState("");

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) =>{
      return item !== tarefa
    })
    setLista(listaFiltrada)
  }; //criando uma função de remover tarefas.

  const adicionaTarefa = () => {
    const novaLista = [...lista]
    novaLista.push(novaTarefa)
    setLista(novaLista)
    setNovaTarefa("")
  }; //criando a função para adicionar a nova tarefa.

  const renderizarLista = lista.map((tarefa, index) => {
    return (
      <Tarefa key={index}>
        <p>{tarefa}</p>
        <RemoveButton onClick={() => removeTarefa(tarefa)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  }); //criando uma função map aqui.

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{renderizarLista}</ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
