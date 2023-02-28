import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Comment from "../comment/comment";
import ListAddress from "./listAddress";

const slug = 'dien-thoai-di-dong/apple-iphone-12-256gb-chinh-hang-vn-a'
const Footer = () => {
   const dispatch = useDispatch()

   const listComment = useSelector(store => store.comment.listComment)
   console.log(listComment)
  return (
    <div className="footer">
        <div className="form-comment">
            <Comment />
        </div>
 
    </div>
  )
}

export default Footer