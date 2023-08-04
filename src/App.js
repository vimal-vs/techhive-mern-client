import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";

export default function App() {
  return (
    <div className="flex flex-col gap-5">
      <ItemList />
      <AddItemForm />
      <EditItemForm />
    </div>
  );
}
