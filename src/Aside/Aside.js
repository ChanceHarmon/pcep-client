import './Aside.css'
import data from '../Util/initialTestObj.json'

function Aside() {
  return (
    <div className="Aside">
      <ul>
        {data.content.map((item, index) =>
          <li key={index}>
            <h3>{item.overview.label}</h3>
            {/* <ul>
              {data.content[index].topicContent.map((results, i) =>
                <li key={i}>
                  <p>{results.label}</p>
                </li>
              )}
            </ul> */}
          </li>
        )
        }
      </ul >
    </div >
  )
}
export default Aside;