import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail, Orders, OrderDetail, Help, Inbox, Account, ScanQRCode, BarCodeScanner } from '../../containers/pages';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        NewsDetail: {
            screen: NewsDetail,
        },
    },
    {
        // headerMode: 'none',
        initialRouteName: 'Home'
    }
);

const OrdersStack = createStackNavigator(
    {
        Orders: {
            screen: Orders,
        },
        OrderDetail: {
            screen: OrderDetail,
        },
    },
    {
        // headerMode: 'none',
        initialRouteName: 'Orders'
    }
);

const HelpStack = createStackNavigator(
    {
        Help: {
            screen: Help,
        },
    },
    {
        // headerMode: 'none',
        initialRouteName: 'Help'
    }
);

const InboxStack = createStackNavigator(
    {
        Inbox: {
            screen: Inbox,
        },
    },
    {
        // headerMode: 'none',
        initialRouteName: 'Inbox'
    }
);

const AccountStack = createStackNavigator(
    {
        Account: {
            screen: Account,
        },
    },
    {
        // headerMode: 'none',
        initialRouteName: 'Account'
    }
);

const ScanStack = createStackNavigator(
    {
        ScanQRCode: {
            screen: ScanQRCode,
        },
    },
    {
        // headerMode: 'none',
        initialRouteName: 'ScanQRCode'
    }
);

const Router = createSwitchNavigator(
    {
        HomeStack,
        OrdersStack,
        HelpStack,
        InboxStack,
        AccountStack,
        ScanStack,
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
);

export default createAppContainer(Router);