import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postRef = collection(dataBase, "posts");

  const onCreatePost = async (data) => {
    await addDoc(postRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
    
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="Title..." {...register("title")} />
      <p> {errors.title?.message} </p>
      <textarea placeholder="Description..." {...register("description")} />
      <p> {errors.description?.message} </p>
      <input type="submit" />
    </form>
  );
};
