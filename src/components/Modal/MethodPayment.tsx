import { Pix } from "./Pix";
import { Ted } from "./Ted";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function MethodPayment() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <Tabs
        defaultValue="pix"
        className="flex flex-col items-center justify-center"
      >
        <TabsList className="w-full max-w-52 rounded-lg border border-transparent bg-transparent">
          <TabsTrigger
            value="pix"
            className="w-full bg-[#2E3138] font-semibold text-white data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          >
            PIX
          </TabsTrigger>
          <TabsTrigger
            value="ted"
            className="w-full bg-[#2E3138] font-semibold text-white data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Ted
          </TabsTrigger>
        </TabsList>
        <TabsContent value="pix">
          <Pix />
        </TabsContent>
        <TabsContent value="ted">
          <Ted />
        </TabsContent>
      </Tabs>

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h3 className="text-xl font-semibold text-white">
          Atenção: O site não possui integração com plataformas de pagamento.
        </h3>
        <p className="text-base font-medium text-white">
          Após concluir a compra, nenhuma confirmação automática será exibida e
          você permanecerá na mesma tela.
          <br /> Fique tranquilo(a), sua participação será registrada
          normalmente.
        </p>
      </div>
    </div>
  );
}
