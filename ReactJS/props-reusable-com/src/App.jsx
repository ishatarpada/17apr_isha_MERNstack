import Button from './Components/Reusable/Button'

export default function App() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <div className="bg-white rounded p-8 shadow">
          <div className="flex gap-3 flex-wrap  justify-center items-center container mx-auto">
            <Button color="primary" onClick={() => alert()}>Register</Button>
            <Button color="danger">Register</Button>
            <Button color="error">Register</Button>
            <Button color="indigo">Register</Button>
            <Button color="pink">Register</Button>
            <Button color="green">Register</Button>
            <Button color="warning">Register</Button>
            <Button color="yellow">Register</Button>
            <Button color="violate">Register</Button>
            <Button color="blue">Register</Button>
            <Button color="white">Register</Button>
          </div>
        </div>
      </div>
    </>
  )
}
