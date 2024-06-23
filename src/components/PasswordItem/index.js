import './index.css'

const PasswordItem = props => {
  const {passwordsList, showPasswords, handleDeletePassword} = props
  console.log(props)
  const {id, website, username, password} = passwordsList
  const displayPassword = showPasswords ? password : '••••••••'
  const initialName = website.slice(0, 1)
  return (
    <li className="passwords-item">
      <p className="initial">{initialName}</p>
      <div className="url-pwd">
        <p className="url">{website}</p>
        <p className="name">{username}</p>
        <p className="display-password">{displayPassword}</p>
        <img
          className="pwd-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      </div>
      <button
        type="submit"
        className="delete-btn"
        onClick={() => handleDeletePassword(id)}
        data-testid="delete"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
/*
    <li className="password-item">
      <div className="password-details">
        <p>{website}</p>
        <p>{username}</p>
        <p>{displayPassword}</p>
      </div>
      <button onClick={() => handleDeletePassword(id)} data-testid="delete">
        Delete
      </button>
    </li>
*/
