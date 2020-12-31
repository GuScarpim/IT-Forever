import React, { useEffect, useState } from 'react';
import * as S from './styles/home';

import Spinner from '../Components/spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../Components/menu/Navbar';

import LogoCabeca from '../Assets/logo3.png';

import Globals from '../Globals.json';
import api from '../Services/api';

const createNotify = () => toast.success('Dados cadastrado com sucesso!.',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
const updateNotify = () => toast.success('Dados atualizado com sucesso!.',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
const deleteNotify = () => toast.success('Dados deletado com sucesso!.',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
const errorNotify = () => toast.error('Erro na requisição, por favor tente novamente mais tarde!.',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });

const errorIsEmpetyNotify = () => toast.error('Preencha todos os campos!.',
  {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });

export default function Logado() {
  const [products, setProducts] = useState([])
  const [description, setDescription] = useState("")
  const [productValue, setProductValue] = useState("")
  const [isLoad, setIsload] = useState(false)
  const [isLoadModal, setIsLoadModal] = useState(false)
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(0)

  const createProduct = () => {
    if (description !== "" && productValue !== "") {
      setIsLoadModal(true)

      api.post(Globals.api.createProduct, {
        descricao: description,
        valor: productValue
      })
        .then(response => {
          setIsLoadModal(false)
          createNotify()
          clearState()
        })
        .catch(err => {
          errorNotify()
          setIsLoadModal(false)
          console.log(err)
        })
    } else {
      errorIsEmpetyNotify()
    }
  }

  const updateProduct = () => {
    setIsLoadModal(true)
    api.put(Globals.api.updateProduct + id, {
      descricao: description,
      valor: productValue
    }).then(response => {
      setIsLoadModal(false)
      updateNotify()
    }).catch(err => {
      errorNotify()
      setIsLoadModal(false)
      console.log(err)
    })
  }

  const selectAction = () => {
    if (id !== 0) {
      updateProduct()
    } else {
      createProduct()
    }
  }

  const clearState = () => {
    setDescription("")
    setProductValue("")
  }

  const loadData = () => {
    setIsload(true)
    api.get(Globals.api.getUser)
      .then(response => {
        setIsload(false)
        setProducts(response.data)
      }).catch(error => {
        console.log(error)
        errorNotify()
        setIsLoadModal(false)
      })
  }

  const deleteProducts = (id: any) => {
    setIsLoadModal(true)
    api.delete(Globals.api.deleteProduct + id)
      .then(response => {
        loadData()
        deleteNotify()
      }).catch(error => {
        console.error(error)
        setIsLoadModal(false)
        errorNotify()
      })
  }

  const openModal = (id: any, description?: any, productValue?: any) => {
    if (id === 0) {
      clearState()
      setOpen(true)
      setId(0)
    } else {
      setOpen(true)
      setId(id)
      setDescription(description)
      setProductValue(productValue)
    }
  }

  const closeModal = () => {
    setOpen(false)
    loadData()
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <NavBar />
      <S.Container >
        <Toaster />
        <S.Card>
          <S.CreateNew>
            <button onClick={() => openModal(0)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
            </button>
          </S.CreateNew>
          {isLoad ?
            <S.PositionSpinner>
              <Spinner />
            </S.PositionSpinner> :

            <table className="table table-action">

              <thead>
                <tr>
                  <th className="t-small">ID</th>
                  <th className="t-small">Descrição</th>
                  <th className="t-small">Valor</th>
                  <th className="t-icons">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((item: any) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.descricao}</td>
                    <td>{item.valor}</td>
                    <td className="actions">
                      <button onClick={() => deleteProducts(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                          <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                        </svg>
                      </button>
                      <button onClick={() => openModal(item.id, item.descricao, item.valor)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                          <path d="M14.078 4.232l-12.64 12.639-1.438 7.129 7.127-1.438 12.641-12.64-5.69-5.69zm-10.369 14.893l-.85-.85 11.141-11.125.849.849-11.14 11.126zm2.008 2.008l-.85-.85 11.141-11.125.85.85-11.141 11.125zm18.283-15.444l-2.816 2.818-5.691-5.691 2.816-2.816 5.691 5.689z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }

        </S.Card>

        <S.Modal open={open}>
          <S.Centralize>
            <S.ModalContent>
              <img src={LogoCabeca} alt="IT Forever" />
              <span className="close" onClick={() => closeModal()}>&times;</span>
              <p>{id !== 0 ? "Atualizar Produtos" : "Cadastrar Produtos"}</p>

              <div className="textPosition">
                <label>Descrição</label>
                <input type="text" value={description}
                  onChange={(e) => setDescription(e.target.value)} placeholder="Description" />

                <label>Valor</label>
                <input type="number" step="0.01" value={productValue}
                  onChange={(e) => setProductValue(e.target.value)} placeholder="Value" />


                <button onClick={selectAction}>
                  {isLoadModal ?
                    <S.PositionSpinner>
                      <Spinner button />
                    </S.PositionSpinner> :
                    <>
                      {id !== 0 ? "Atualizar" : "Cadastrar"}
                    </>
                  }</button>
              </div>
            </S.ModalContent>
          </S.Centralize>
        </S.Modal>
      </S.Container>
    </>
  )
}
