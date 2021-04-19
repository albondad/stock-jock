import { 
    useEffect,
    useState
} from 'react';
import { useRouter } from 'next/router';
import { 
    firestore,
    onAuthStateChanged,
    signOut
} from '../../../helpers/firebase';
import {
    Account,
    Watchlist
} from '../../views';
import * as S from './dashboard-styled-components';

export const Dashboard = () => {
    // useState hook
    const [user, setUser] = useState({
        email: undefined,
        fullName: undefined,
        id: undefined,
        rfid: undefined,
        Watchlist: []
    });
    // userRouter hook
    const router = useRouter();

    // useEffect hook
    useEffect(() => {
        onAuthStateChanged(
            // if user exists
            async (firebaseUser) => {
                const userRef = await firestore.collection('users').doc(firebaseUser.uid);
                const userSnapshot = await userRef.get();
                const userData = userSnapshot.data();

                const newUser = userData;
                setUser(newUser);
            },
            // if user does not exist
            () => {
                // debugging
                //console.log('userDoesNotExist')
                router.push('/')
            }
        )},
        []  
    )

    // event handlers
    const onAccountLinkClick = () => {
        const url = {
            pathname: '/dashboard',
            query: {
                view: "account"  // update the query param
            }
        }
        router.push(url);
    }

    const onWatchlistLinkClick = () => {
        const url = {
            pathname: '/dashboard',
            query: {
                view: "watchlist"  // update the query param
            }
        }
        router.push(url);
    }

    const onSignOutLinkClick = () => {
        signOut();

        const url = {
            pathname: '/'
        }
        router.push(url);
    }

    // debugging
    
    // render
    return (
        <S.Dashboard>
            {/* sidebar */}
            <S.DashboardSidebar>
                <S.DashboardSidebarHead>
                    <S.DashboardSidebarHeadImage src="/images/logo.png"/>
                </S.DashboardSidebarHead>
                <S.DashboardSidebarBody>
                    <S.DashboardSidebarBodyItem onClick={onAccountLinkClick}>Account</S.DashboardSidebarBodyItem>
                    <S.DashboardSidebarBodyItem onClick={onWatchlistLinkClick}>Watchlist</S.DashboardSidebarBodyItem>
                    <S.DashboardSidebarBodyItem onClick={onSignOutLinkClick}>Sign Out</S.DashboardSidebarBodyItem>
                </S.DashboardSidebarBody>
            </S.DashboardSidebar>

            {/* body */}
            <S.DashboardBody>
                {
                    router.query.view === 'account' &&
                    <Account user={user} />
                }
                {
                    router.query.view === 'watchlist' &&
                    <Watchlist user={user} />
                }
            </S.DashboardBody>
        </S.Dashboard>
    )
}
