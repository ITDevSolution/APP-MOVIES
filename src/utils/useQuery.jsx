import { useLocation } from 'react-router-dom'
// CREACION DE HOOK PERSONALIZADO 
export function useQuery(){
    return new URLSearchParams(useLocation().search)
}