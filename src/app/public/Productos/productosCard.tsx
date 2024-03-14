import React, {FC} from "react";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import { IProducto } from "@/interface/IProducto";

interface Props {
    producto: IProducto;
}
export const ProductoCard:FC<Props> = ({producto}) => {
    return (
        <Card className="py-4 min-h-72 max-h-72">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{producto.Codigo}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={producto.Codigo}
        />
      </CardBody>
    </Card>
    )
       
}