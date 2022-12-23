import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {postAdded} from "./postsSlice.js";
import {selectAllUsers} from "../users/usersSlice.js";

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title,setTitle] = useState('')
    const [content,setContent]=useState('')
    const [userId,setUserId]=useState('')
    const user = useSelector(selectAllUsers) //get data from user
    console.log(user)


    const onTitleChanged = e =>setTitle(e.target.value)
    const onContentChanged = e =>setContent(e.target.value)
    const onAuthorChanged = e =>setUserId(e.target.value)

    const onSavePostClicked = ()=>{
        if(title && content){
            /*
            dispatch(
                postAdded({
                    id:nanoid(),
                    title,
                    content
                })
            )
             */
            dispatch(
                postAdded(title,content,userId)
            )
            setTitle('')
            setContent('')
        }
    }
    const canSave = Boolean(title) && Boolean(content)&& Boolean(userId)
    const usersOptions = user.map(user=>(
        <option key={user.id} value = {user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a new post</h2>
            <form style={{display:'flex',flexDirection:'column',width:'300px'}}>
                <label htmlFor={"postTitle"}>Post Title:</label>
                <input
                    type={'text'}
                    id={'postTitle'}
                    name={'postTitle'}
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor={"postAuthor"}>Author:</label>
                <select id={"postAuthor"} value={userId} onChange={onAuthorChanged}>
                    <option value={''}></option>
                    {usersOptions}
                </select>
                <label htmlFor={"postContent"}>Content:</label>
                <textarea
                    id={'postContent'}
                    name={'postContent'}
                    value={content}
                    onChange={onContentChanged}
                />
                <button type={'button'}
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;