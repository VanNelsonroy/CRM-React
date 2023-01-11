import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import './index.css'
import Index, {loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente, {loader as editarLoader, action as editarAction} from './pages/EditarCliente'
import { action as deleteAction } from './components/Cliente'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
        element : <Index />,
        loader : clientesLoader,
        errorElement : <ErrorPage />
      },
      {
        path : '/clientes/nuevo',
        element : <NuevoCliente />,
        action : nuevoClienteAction,
        errorElement : <ErrorPage />
      },
      {
        path : '/clientes/:clienteId/editar',
        element : <EditarCliente />,
        loader : editarLoader,
        action : editarAction,
        errorElement : <ErrorPage />
      },
      {
        path : '/clientes/:clienteId/eliminar',
        action : deleteAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
