import { useNavigate, Form, redirect } from "react-router-dom"
import { deleteCliente } from "../data/clientes"

export async function action({params}){
    await deleteCliente(params.clienteId)
    return redirect('/')
}

const Cliente = ({cliente}) => {
    const navigate = useNavigate()
    const {nombre, email, empresa, telefono, id} = cliente
  return (
    <tr className="border-b">
        <td className="p-4 space-y-2">
            <p className="text-2xl text-gray-800">{nombre}</p>
            <p>{empresa}</p>
        </td>
        <td className="p-4">
            <p className="text-gray-600">
                <span className="text-gray-800 font-bold uppercase">Email: </span>{email}
            </p>
            <p className="text-gray-600">
                <span className="text-gray-800 font-bold uppercase">Tel: </span>{telefono}
            </p>
        </td>
        <td className="p-4 flex gap-3">
            <button type="button" className="text-blue-500 hover:text-blue-700 uppercase font-bold text-xs"
                onClick={() => navigate(`/clientes/${id}/editar`)}>
                Editar
            </button>
            <Form 
                method="post" 
                action={`/clientes/${id}/eliminar`}
                onSubmit={(e) => {
                    if(!confirm('Desea eliminar este registro?'))
                        e.preventDefault()
                }}>
                <button type="submit" className="text-red-500 hover:text-red-700 uppercase font-bold text-xs">
                    Eliminar
                </button>
            </Form>
        </td>
    </tr>
  )
}

export default Cliente