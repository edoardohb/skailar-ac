import { getAllPins } from "@/server/actions/get-pins"
import { auth } from "@/server/auth"
import { TableSection } from "./table-section"
import { getAccountByUserId } from "@/server/actions/get-accounts"

export const TableSectionServer = async () => {
  const session = await auth()
  const pins = await getAllPins()

  const userId = session?.user?.id;

  const account = await getAccountByUserId(userId ?? '');

  const filteredPins = pins.filter(pin => pin.userId === account?.providerAccountId)

  return <TableSection filteredPins={filteredPins} />
}
