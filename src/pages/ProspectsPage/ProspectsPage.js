import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import prospectService from '../../utils/prospectService';
import { List } from 'semantic-ui-react';

function ProspectsPage(props) {
  const [prospect, setProspect] = useState([]);

  useEffect(() => {
    async function getProspects() {
      let prospects = await prospectService.getAll();
      setProspect(prospects);
    }
    getProspects();
  }, []);

  async function handleDeleteProspect(id) {
    await prospectService.deleteOne(id);
    setProspect(
      {
        prospect: prospect.filter((p) => p._id !== id),
      },
      props.history.push('/')
    );
  }
  //       style={{ fontSize: `1.5rem`, color: '#5A0' }}
  // to={{ pathname: `/prospects/${p._id}`, state: { p } }}
  return (
    <div classnamee="container">
      <div classnamee="ui top attached buttons">
        <Link className="ui button " to="/addprospect">
          + NEW PROSPECT
        </Link>
        <Link to="" className="ui button " onClick={props.handleLogout}>
          BACK
        </Link>
        <h1>MY PROSPECTS</h1>
      </div>
      <div>
        {prospect.map((p, i) => (
          <List selection verticalAlign="middle" key={i}>
            <List.Item>
              <List.Content>
                <Link
                  className=""
                  style={{ fontSize: `1.5rem`, color: '#5A0' }}
                  to={{ pathname: '/prospect', state: { p, i } }}
                >
                  {p.firstName} {p.lastName} ►
                  <button
                    className="ui right floated button"
                    // style={{ maxWidth: 37, minWidth: 37 }}
                    onClick={() => handleDeleteProspect(p._id)}
                  >
                    DELETE
                  </button>
                </Link>
              </List.Content>
            </List.Item>
          </List>
        ))}
      </div>
    </div>
  );
}

export default ProspectsPage;
