import { Table, TableHead, TableCell, TableRow } from './table'
import { Button } from './button'

function App() {
  return (
    <div className="grid-rows-app grid min-h-screen antialiased lg:grid-cols-app lg:grid-rows-1">
      <div className="fixed left-0 right-0 top-0 z-20 flex flex-col bg-black p-4 data-[state=open]:bottom-0
        data-[state=open]:h-screen lg:right-auto lg:w-[250px] lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
          App
      </div>

      <main className="row-start-2 px-8 py-4 lg:col-start-2 lg:row-start-1">
        <div className="flex-center gap-6 py-6">
            <a
              data-current={true}
              href="#"
              className="flex-center h-8 w-40 rounded-md border border-black-300 px-2 py-4 font-semibold
                transition-colors hover:bg-black-300 data-[current=true]:bg-white
                data-[current=true]:text-yellow-500"
            >
              Cursos
            </a>
        </div>

        <div className="flex flex-col w-full">
          <div className="space-y-2.5 rounded-lg bg-black px-6 py-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl">Cursos</h2>

              <Button variant="secondary" className="font-semibold">
                Novo Curso
              </Button>
            </div>

            <Table>
              <thead>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Tempo de Acesso</TableHead>
                  <TableHead>ID do Produto</TableHead>
                  <TableHead className="text-center">Alunos</TableHead>
                  <TableHead className="text-center">Desempenho</TableHead>
                  <TableHead className="text-center">Arquivos</TableHead>
                  <TableHead className="text-center">Editar</TableHead>
                </TableRow>
              </thead>
              <tbody>
                  <TableRow>
                    <TableCell>teste</TableCell>
                    <TableCell>1 mês</TableCell>
                    <TableCell>12324</TableCell>
                    <TableCell>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="mx-auto flex text-xl"
                      >
                        +
                      </Button>
                    </TableCell>
                    <TableCell>
                      <button className="flex-center mx-auto h-10 w-10 rounded-md bg-yellow-500 text-xl text-white">
                        +
                      </button>
                    </TableCell>
                    <TableCell>
                      <button className="flex-center mx-auto h-10 w-10 rounded-md bg-yellow-500 text-xl text-white">
                        +
                      </button>
                    </TableCell>
                    <TableCell>
                      <button className="flex-center mx-auto h-10 w-10 rounded-md bg-yellow-500 text-xl text-white">
                        +
                      </button>
                    </TableCell>
                  </TableRow>
              </tbody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
