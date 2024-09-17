import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import List from './List';
import Form from './Form';
import Alert from './Alert';
import {
  ADD_ITEM,
  EDIT_ITEM,
  CLEAR_LIST,
  SHOW_ALERT,
} from '../reducer/actions';

const UI = ({ dispatch, list, show }) => {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      dispatch({
        type: SHOW_ALERT,
        payload: { show: true, type: 'danger', msg: 'Please Enter Value' },
      });
    } else if (name && isEditing) {
      dispatch({ type: EDIT_ITEM, payload: { id: editId, name } });
      dispatch({
        type: SHOW_ALERT,
        payload: { show: true, type: 'success', msg: 'Value Changed' },
      });
      setName('');
      setEditId(null);
      setIsEditing(false);
    } else {
      dispatch({ type: ADD_ITEM, payload: name });
      dispatch({
        type: SHOW_ALERT,
        payload: { show: true, type: 'success', msg: 'Item Added To The List' },
      });
      setName('');
    }
  };

  useEffect(() => {
    localStorage.setItem('List', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <div className='grocery-form'>
        {show && <Alert />}
        <Form
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          isEditing={isEditing}
        />
      </div>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setEditId={setEditId}
            setName={setName}
          />
          <button
            className='clear-btn'
            onClick={() => dispatch({ type: CLEAR_LIST })}
          >
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
};
const mapStateToProps = (state) => {
  const { list } = state;
  const { show } = state.showAlert;

  return {
    list,
    show,
  };
};
export default connect(mapStateToProps)(UI);
