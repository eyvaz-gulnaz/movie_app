//lazy loading practice

// import React, { Suspense } from 'react';
// import { ActivityIndicator, Text, View } from 'react-native';

// // function App(): React.JSX.Element {
// //   const Screen = React.lazy(() => import('./assets/screen'));
// //   return (
// //     <View>
// //       <Text>Hello</Text>
// //       <Suspense
// //         fallback={
// //           <ActivityIndicator style={{ flex: 1, marginTop: 100 }} size={'large'} />
// //         }>
// //         <Screen title="screen" onPress={() => console.log('screen')} />
// //       </Suspense>
// //     </View>
// //   );
// // }
// // export default App;

// const LazyLoadedComponent = React.lazy(() => import('./src/LazyLoadedComponent'));

// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Hello</Text>
//       <Suspense fallback={<ActivityIndicator />}>
//         <LazyLoadedComponent />
//       </Suspense>
//     </View>
//   );
// };

// export default App;


// import React from 'react';
// import { View, Text } from 'react-native';

// const LazyLoadedComponent = () => {
//     return (
//         <View>
//             <Text>This component was lazily loaded!</Text>
//         </View>
//     );
// };

// export default LazyLoadedComponent;
