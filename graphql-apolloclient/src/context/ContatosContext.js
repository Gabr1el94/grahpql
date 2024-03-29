import { useMutation, useQuery } from "@apollo/client";
import React, {useContext}  from "react";
import {ADD_CONTATO, GET_CONTATOS, REMOVE_CONTATO, UPDATE_CONTATO} from "../grahpql";

export const MyContext = React.createContext()

const cacheCreate = {
  update(cache, { data }){
      const newContatoResponse = data?.criarContato;
      const existingContatos = cache.readQuery({query: GET_CONTATOS})

      cache.writeQuery({
          query: GET_CONTATOS,
          data: {
              contatos: [...existingContatos.contatos, newContatoResponse]
          }
      })
  }
};

export default function ContatosContextProvider({ children }) {
    const { data, loading } = useQuery(GET_CONTATOS);
    const [criarContato] = useMutation(ADD_CONTATO, cacheCreate);
    const [deletarContato] = useMutation(REMOVE_CONTATO);
    const [atualizarContato]  = useMutation(UPDATE_CONTATO);

    const [refId, refNome, refEmail, refTelefone] = useMyRef(4);

    function handleSubmit(event) {
      event.preventDefault();

      if (refId.current.value) {
        atualizarContato({
          variables:{
            id: parseInt(refId.current.value),
            nome: refNome.current.value,
            email: refEmail.current.value,
            telefone: refTelefone.current.value,
          }
        });
        refId.current.value = '';
      }else{
        criarContato({
          variables: {
            nome: refNome.current.value,
            email: refEmail.current.value,
            telefone: refTelefone.current.value,
          }
        });
      }

      refNome.current.value = '';
      refEmail.current.value = '';
      refTelefone.current.value = '';
    }

    function hundleUpdate(item) {
      refId.current.value = item.id;
      refNome.current.value = item.nome;
      refEmail.current.value = item.email;
      refTelefone.current.value = item.telefone;
    }

    return (
      <MyContext.Provider
        value={{
          contatos: {
            itens: data ? data.contatos : [],
            loading,
            deletarContato,
          },
          form: {
            handleSubmit,
            hundleUpdate,
            refId,
            refNome,
            refEmail,
            refTelefone
          }
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
  
  export function useContatosContext() {
    return useContext(MyContext);
  }