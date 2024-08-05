import { Children, createContext ,useState} from "react"
export const DataContext = createContext(null);
const DataProvider = () =>{
  const [account, setAccount ] = useState ({username:'',name:''})
   return (
    <DataContext.Provider value={{
        account,
        setAccount
    }}>
      {Children}
    </DataContext.Provider>
   )
}
export default DataProvider;