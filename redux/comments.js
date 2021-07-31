import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        
        case ActionTypes.ADD_COMMENT:
            let comment= action.payload;
            let id= state.comments.length;
            comment.id=id;
            console.log("$$$$$$$$$$$", {comment})
            return {...state, errMess: null, comments: state.comments.concat(comment)};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};