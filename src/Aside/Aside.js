import './Aside.css'


const testNums = ['Introduction to PCEP', 'Number Systems', 'Bitwise Operations', 'Comprehensions', 'Recursive Functions', 'Miscellaneous', 'CS201 and CS202 Review', 'Resources']
function Aside() {
  return (
    <div className="Aside">
      <ul>
        {testNums.map((item, index) =>
          <li key={index}>
            <p> {item}</p>
          </li>
        )
        }
      </ul >
    </div >
  )
}
export default Aside;