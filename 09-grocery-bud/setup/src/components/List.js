import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { connect } from 'react-redux';
import { REMOVE_ITEM, SHOW_ALERT } from '../reducer/actions';
const List = ({ list = [], dispatch, setIsEditing, setEditId, setName }) => {
  return (
    <div className='grocery-list'>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => {
                  setIsEditing(true);
                  setEditId(id);
                  setName(title);
                }}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => {
                  dispatch({ type: REMOVE_ITEM, payload: id });
                  dispatch({
                    type: SHOW_ALERT,
                    payload: {
                      show: true,
                      type: 'danger',
                      msg: 'Item Removed',
                    },
                  });
                  setName('');
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};

export default connect(mapStateToProps)(List);
