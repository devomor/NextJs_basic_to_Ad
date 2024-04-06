"use client"
export default function Home() {

  const fun= ()=>{
    alert("hellow programmer")
  }
  return (
    <main >
    <h1>hellow programmer</h1>
    <button onClick={fun}>click me</button>
    </main>
  );
}
