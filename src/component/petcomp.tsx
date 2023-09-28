import { View, Text } from "react-native"
export type nametype={   
    firstName:string,
    lastName:string
}


export function Petcomp(name:nametype){
  return (
    <Text>
      Its name is {name.firstName}
    </Text>
  )
}


