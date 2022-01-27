import React from 'react';
//import ApolloClient from 'apollo-boost';
//import { ApolloProvider, Query } from 'react-apollo';
import { gql, useQuery, ApolloClient, InMemoryCache } from '@apollo/client';



  // function dropAddress({_address}) {
  //   const { loading, error, data } = useQuery(ADDRESS_QUERY, {variables: {address: _address}});
  //   if (loading) return null;
  //   if (error) return `Error! ${error}`;
  //   return data.geocode.address;
  // }

  // function getAddress(_address) {
  //   return client.query({
  //     query: gql `query {
  //         geocode (address: "29 rue du 4 septembre") {
  //           address
  //           latitude
  //           longitude
  //         }
  //       }`
  //   }).then(result => result.data.geocode.address)
  // }

  
const ADDRESS_QUERY = gql`
  query getAddress($address: String!) {
    geocode(address: $address) {
      address
      latitude
      longitude
    }
  }`;
    
function AddressValidator(_address) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://stuart-frontend-challenge.vercel.app/graphql'
  })
  const { loading, error, data } = useQuery(ADDRESS_QUERY, {variables: {address: _address}});
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return data.geocode.address;
}
export default AddressValidator