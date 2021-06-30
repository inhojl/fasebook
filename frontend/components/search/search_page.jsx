import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NoResults from '../shared/no_results';
import FriendButton from './friend_button'
import Loader from '../util/loader'

const SearchPage = ({
  fetchUsers,
  searchResults,
  users,
  profiles,
  currentUserId,
  createFriendRequest,
  updateFriendRequest,
  deleteFriendRequest,
  fetchUser
}) => {

  const [ loading, setLoading ] = useState(true);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  console.log(name)

  useEffect(() => {
    setLoading(true)
    if (name) {
      fetchUsers(name)
        .then(() => setLoading(false))
        .fail(() => setLoading(false))
    }
  }, [name])

  return (

    
    <div className='search-page'>
      <div className='search-page__background'></div>

      {
        !loading ? (
        searchResults.length ?
          <div className='search-page__results-container'>
            <h1 className='search-page__results-container__heading'>People</h1>
            <ul className='search-page__results'>
              {searchResults.map((userId, i) => {
                return (
                  <li className='search-page__result-item' key={`result-item-${i}`}>
                    <Link to={`/${userId}`}>
                      {
                        profiles[users[userId].profileId].profilePicUrl ?
                          
                          <div
                            className='search-page__profile-image'
                            style={{ backgroundImage: `url(${window.location.origin + profiles[users[userId].profileId].profilePicUrl})` }}
                          ></div>
                          : <div className='search-page__no-img'><FontAwesomeIcon icon={faUser} /></div>
                      }
                    </Link>
               
                    <Link to={`/${userId}`}>
                      <span className='search-page__name'>{users[userId].firstName} {users[userId].lastName}</span>
                    </Link>
                    <div className='profile-header__friend-container'>
                      <FriendButton
                        users={users}
                        user={users[userId]}
                        currentUserId={currentUserId}
                        createFriendRequest={createFriendRequest}
                        updateFriendRequest={updateFriendRequest}
                        deleteFriendRequest={deleteFriendRequest}
                        fetchUser={fetchUser}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div> : (
            <div className='search-page__no-results'>
              <NoResults />
            </div>
          )
        ): <Loader />
      }

    </div>

  )
}

export default SearchPage;