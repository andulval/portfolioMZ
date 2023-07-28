// import { jsx, jsxs } from 'react/jsx-runtime';

// const ProjectM = (props) =>
//   jsxs('div', {
//     className:
//       'flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row',
//     children: [
//       jsx('div', {
//         className: 'shrink-0',
//         children: jsx('a', {
//           href: props.link,
//           children: jsx('img', {
//             className: 'h-36 w-36 hover:translate-y-1',
//             src: props.img.src,
//             alt: props.img.alt,
//             loading: 'lazy',
//           }),
//         }),
//       }),
//       jsxs('div', {
//         children: [
//           jsxs('div', {
//             className: 'flex flex-col items-center gap-y-2 md:flex-row',
//             children: [
//               jsx('a', {
//                 className: 'hover:text-cyan-400',
//                 href: props.link,
//                 children: jsx('div', {
//                   className: 'text-xl font-semibold',
//                   children: props.name,
//                 }),
//               }),
//               jsx('div', {
//                 className: 'ml-3 flex gap-2',
//                 children: props.category,
//               }),
//             ],
//           }),
//           jsx('p', {
//             className: 'mt-3 text-gray-400 mb-3',
//             children: props.description,
//           }),
//           jsx('a', {
//             className: 'hover:text-cyan-400',
//             href: props.moreInfoLink,
//             children: props.moreInfoLinkDesc,
//           }),
//         ],
//       }),
//     ],
//   });
// export default ProjectM;
