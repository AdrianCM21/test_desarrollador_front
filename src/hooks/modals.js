import * as modalSlice  from "@/store/ModalSlice";
import { useDispatch, useSelector } from "react-redux";

export const useModals = () => {
    const dispatch = useDispatch();
    const showUserPostGrafig = useSelector((state) => state.modals.showUserPostGrafig);
    const setShowUserPostGrafig = (value) => {
        dispatch(modalSlice.setShowUserPostGrafig(value));
    };
    return { showUserPostGrafig, setShowUserPostGrafig };
};