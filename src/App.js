import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";
import Header from "./components/widgets/Header";
import Footer from "./components/widgets/Footer";

export default function App() {
  return (
    <div className="flex flex-col justify-between min-h-full md:min-h-fit md:h-screen">
      <Header />
      <div className="flex flex-col justify-between h-full">
        <ItemList />
        <div className="flex flex-col gap-6 my-8 md:gap-0 md:flex-row justify-evenly items-center md:my-auto">
          <AddItemForm />
          <EditItemForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
