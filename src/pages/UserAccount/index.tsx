import React, {FunctionComponent, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {db} from "firebaseSetup";
import {collection, setDoc, getDoc, doc} from "firebase/firestore";

import {Layout} from "components/Layout/Layout";
import {Main} from "components/Main/Main";
import "pages/UserAccount/UserAccount.scss";
const AVERAGE_LIFE_YEARS = 80;

type usersData = {
    uid: string,
    birthDate: string,
    totalYears: number
}



export const UserAccount:FunctionComponent = ({}) => {
    const history = useHistory();
    const [isAuth, setIsAuth] = useState(false);
    const [birthDate, setBirthDate] = useState("");
    const [totalYears, setTotalYears] = useState(AVERAGE_LIFE_YEARS);
    const fetchData = async() => {
        const uid = JSON.parse(localStorage.getItem("user"))?.uid;
        const docRef = doc(db, "usersData", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setBirthDate(docSnap.data().data.birthDate);
            setTotalYears(docSnap.data().data.totalYears);
        } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        const isUserLogged = !!localStorage.getItem("user");
        // setIsUserNew(!!localStorage.getItem("isNewUser"));
        isUserLogged ? setIsAuth(isUserLogged) : history.push("/");
        if(isAuth){
            // noinspection JSIgnoredPromiseFromCall
            fetchData();
        }
    }, [localStorage.getItem("user"), isAuth])
    const onSubmit = async (birthDate: string, totalYears: number) => {
        const uid = JSON.parse(localStorage.getItem("user"))?.uid;
        const usersData: usersData = {
            uid: uid,
            birthDate: birthDate,
            totalYears: totalYears
        }
        setBirthDate(birthDate);
        setTotalYears(totalYears);
        try {
            await setDoc(doc(collection(db, "usersData"), uid), {
                data: usersData
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <>
            <Layout pageClassName="page-container">
                <Main
                    isAuth={isAuth}
                    handleSubmit={onSubmit}
                    defaultBirthDate={birthDate}
                    defaultTotalYears={totalYears}
                />
            </Layout>
        </>
    )
}