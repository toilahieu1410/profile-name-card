import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getComment, postComment } from "../../redux/comment/action";

const Comment = (props) => {

  const dispatch = useDispatch()

  const productId = props.productId
  const productSlug = props.productSlug

  const listComment = useSelector((store) => store.comment.listComment)

  useEffect(() => {
    dispatch(getComment(productSlug))
  }, [productSlug])

  const handleSubmitComment = (data, e) => {
    
    const bodyData = {
      productId: productId,
      productSlug: productSlug,
    }

    console.log(bodyData)
    Object.assign(bodyData, data)

    dispatch(postComment(bodyData)).then(() => {
      e.target.reset()
    })
  }

  useEffect(() => {
    dispatch(postComment())
  }, [])
  return (
    <div className="comment">
      <h6>Binh luan</h6>
      <FormComment handleSubmitComment={handleSubmitComment}/>
      <div className="comment-content">
        {listComment && listComment.map((item) => (
          <ListComment item={item} />
        ))
        }
      </div>
    </div>
  )
}

export default Comment

const ListComment = (props) => {
  const { item } = props
  console.log(item, 'test')
  return (
    <div className="list-comment-content">
      <div className="d-flex align-items-center mb-3">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" width={50}/>
        <div className="d-block">
          <div>{item.name}</div>
          <div>{item.content}</div>
        </div>
      </div>

      <div style={{ marginLeft: "70px" }}>
          {item.reply && item.reply.map((item1) => (
             <div className="d-flex align-items-center mb-3">
             <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" width={50}/>
             <div className="d-block">
               <div>{item1.name}</div>
               <div>{item1.content}</div>
             </div>
           </div>
          ))}
      </div>
    </div>
  )
}

const FormComment = (props) => {


  const {handleSubmitComment} = props

  const { register, handleSubmit, formState: { error } } = useForm({})

  return (
    <div className="form-reply-comment-child">
      <form onSubmit={handleSubmit(handleSubmitComment)}>
        <div className="row">
          <div className="col-md-4">
            <input type={'text'} className='form-control' placeholder="Ho ten" 
            {...register("name", {required: 'Khong duoc de trong'})}
            />
          </div>
          <div className="col-md-4">
            <input type={'text'} className='form-control' placeholder="Dien thoai" 
               {...register("phone", {required: 'Khong duoc de trong'})}
               />
          </div>
          <div className="col-md-4">
            <input type={'text'} className='form-control' placeholder="Email" />
          </div>
        </div>
        <div className="col-md-12 mt-3">
          <textarea className="form-control" placeholder="Noi dung"></textarea>
        </div>
        <div className="text-right mt-3 button-send-comment">
          <button className="btn btn-primary"><span className="text-white"><i className="fa fa-comment-o"></i>Gui binh luan</span></button>
        </div>
      </form>
    </div>
  )
}