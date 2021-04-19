import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { 
    onAuthStateChanged,
    signOut
} from '../../../helpers/firebase';
import * as S from './dashboard-styled-components';

export const Dashboard = () => {
    // userRouter hook
    const router = useRouter();

    // useEffect hook
    useEffect(() => {
        onAuthStateChanged(
            (user) => {
                console.log('userExists')
                console.log(user)
            },
            () => {
                console.log('userDoesNotExist')
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

            </S.DashboardBody>
        </S.Dashboard>
    )
}
