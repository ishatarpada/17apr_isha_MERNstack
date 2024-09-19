import 'remixicon/fonts/remixicon.css'
import Accordion from './Components/Accordion'

export default function App() {

  const data = [
    {
      title: "Register Now",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae illo adipisci ex accusantium harum cupiditate ratione eligendi facere deserunt."
    } ,
    {
      title: "Sign In",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae illo adipisci ex accusantium harum cupiditate ratione eligendi facere deserunt."
    } ,
    {
      title: "Forget password ?",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae illo adipisci ex accusantium harum cupiditate ratione eligendi facere deserunt."
    },
    {
      title: "Upcoming Events",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae illo adipisci ex accusantium harum cupiditate ratione eligendi facere deserunt."
    }
  ]

  return (
    <>
      <div className="w-6/12 mx-auto py-12 font-serif">
        <h1 className="text-6xl font-bold text-center">
          Welcome
        </h1>
        <Accordion data={data} />
      </div>
    </>
  )
}
