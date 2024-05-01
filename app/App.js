import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import { Container, TitleList, List, RowData, InfoData, ValueData, BtnView } from "./src/styles/custom_adm";
import api from "./src/config/api" //importando arquivo com configurações da api

export default function App(){
  // Atribuir dados retornados da API
  const [users, setUsers] = useState([]);
  // Função getUsers para recuperar usuari  os
  const getUsers = async () => {
    // Requisição para API indicando a rota
    await api.get("/users")
      .then((response) => {
        //console.log(response.data.users);
        setUsers(response.data.users);

      }).catch((err) => { 

        if(err.response){
          Alert.alert("Ops, houve um erro:", err.response.data.mensagem);
        }else{
          Alert.alert("Ops, tente mais tarde :/");
        }
      });
  }

  // Função getUsers executada quando usuário carrega a tela
  useEffect(() => {
    getUsers();
  }, []); 

  return(  
    <Container>
      <TitleList>Usuários</TitleList>

      <List>
        {users.map((user) => {
          return (
            <RowData key={user.id}>
              <InfoData>
                <ValueData>{user.name}</ValueData>
              </InfoData>
              <BtnView>Detalhes</BtnView>
            </RowData>
          )
        })}
      </List>
    </Container>
  
  );
}

const styles = StyleSheet.create({

})