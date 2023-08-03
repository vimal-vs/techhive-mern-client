import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";

export default function App() {
  return (
    <div className="">
      cra is slower than my college wifi
      <ItemList />
      <AddItemForm />
      <EditItemForm />
    </div>
  );
}
