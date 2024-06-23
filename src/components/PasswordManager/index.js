import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    showPasswords: false,
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordsList: [],
    searchInput: '',
  }

  handleAddPassword = event => {
    event.preventDefault()
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      showPasswords,
      passwordsList,
    } = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      showPasswords: !prevState.showPasswords,
    }))
  }

  handleDeletePassword = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(eachList => eachList.id !== id)
    this.setState({
      passwordsList: filteredList,
    })
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      showPasswords,
      passwordsList,
    } = this.state
    console.log(passwordsList)
    const filteredPasswordList = passwordsList.filter(eachList =>
      eachList.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <header className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </header>
        <main className="main-content">
          <div className="top-container">
            <div className="password-manager-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
            </div>
            <div className="add-password-container">
              <h1>Add New Password</h1>
              <form className="password-form" onSubmit={this.handleAddPassword}>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input-field"
                    onChange={this.onChangeWebsite}
                    value={websiteInput}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input-field"
                    value={usernameInput}
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-icon"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-field"
                    value={passwordInput}
                    onChange={this.onChangePassword}
                  />
                </div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className="passwords-container">
            <div className="passwords-header">
              <div className="passwords-count-container">
                <h2 className="passwords-count-heading">Your Passwords</h2>
                <p className="passwords-count">{filteredPasswordList.length}</p>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="search-field"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr className="separator" />
            <div className="check-box-container">
              <input
                type="checkbox"
                id="checkbox"
                checked={showPasswords}
                onChange={this.onClickCheckbox}
              />
              <label htmlFor="checkbox" className="check-box">
                Show Passwords
              </label>
            </div>
            <div className="no-passwords-container">
              <ul className="passwords-list-container">
                {filteredPasswordList.length > 0 ? (
                  filteredPasswordList.map(password => (
                    <PasswordItem
                      key={password.id}
                      passwordsList={passwordsList}
                      showPasswords={showPasswords}
                      handleDeletePassword={this.handleDeletePassword}
                    />
                  ))
                ) : (
                  <div className="hidden-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                      alt="no passwords"
                      className="no-passwords-image"
                    />
                    <p className="no-passwords-message">No Passwords</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default PasswordManager
