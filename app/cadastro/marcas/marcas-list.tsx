<<<<<<< HEAD
import { DeleteButton } from "@/components/delete-button";
=======
import DeleteButton from "@/components/delete-button";
>>>>>>> 19ba4e998460baec1b03495901c0f8df0eb1ad45
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Marca } from "@/models/marca";
import { Edit, Trash } from "lucide-react";


export async function MarcasList() {
   //await new Promise((resolve)=>{setTimeout(resolve,3000)})

   const response = await fetch(`${process.env.API_URL}/marca`,{
     cache:'no-store'
   })
   const marcas:Marca[] = await response.json();
  return (
    <section className="mt-8 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marcas.map((marca) => (
            <TableRow key={marca.id}>
              <TableCell className="font-medium">{marca.id}</TableCell>
              <TableCell>{marca.nome}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="icon">
                    <Edit />
                  </Button>
<<<<<<< HEAD
                  <DeleteButton id={marca.id}/>
=======
          
                  <DeleteButton />
>>>>>>> 19ba4e998460baec1b03495901c0f8df0eb1ad45
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
