import type {FC, CSSProperties, HTMLAttributes, DetailedHTMLProps} from 'react';
// `FC`는 React에서 함수형 컴포넌트(Function Component)를 정의할 때 사용할 수 있는 타입입니다.
// `CSSProperties`는 `style` prop의 타입을 지정할 때 사용됩니다.
// `HTMLAttributes`와 `DetailedHTMLProps`는 HTML 요소에 대한 props를 정의할 때 사용됩니다.

import type {ReactElement} from 'react';

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
// `ReactSpanProps`는 `span` 태그에서 사용할 수 있는 모든 기본 속성들을 포함한 타입입니다.
// 이를 통해 `Icon` 컴포넌트가 HTML `span` 요소의 속성들을 받을 수 있게 합니다.

export type IconProps = ReactSpanProps & {
  name: string;
  // `name`은 렌더링할 아이콘의 이름을 나타내는 필수 속성입니다.
  // `ReactSpanProps`와 결합하여 `style`과 같은 HTML 속성을 모두 받을 수 있게 확장합니다.
  // `style`은 선택적으로 인라인 스타일을 적용할 수 있습니다.
};

// export const Icon = (props: IconProps): ReactElement => {
//   const { name } = props;
//   return <span className="material-icons">{name}</span>;
// };
// 이 버전의 `Icon` 컴포넌트는 `IconProps` 타입의 `props`를 받고, 구조 분해 할당을 통해 `name`을 추출합니다.
// 추출한 `name`을 `span` 태그 내부에 렌더링하여 아이콘 이름을 표시합니다.
// `ReactElement`는 컴포넌트가 반환할 수 있는 JSX의 타입입니다.

// export const Icon = ({ name }: IconProps): ReactElement => (
//   <span className="material-icons">{name}</span>
// );
// `Icon` 컴포넌트를 더욱 간결하게 정의한 버전입니다.
// 구조 분해 할당을 함수 파라미터에서 바로 수행하고, 암시적 반환을 사용하여 중괄호와 `return`을 생략했습니다.
// `name`은 `span` 태그의 내용으로 사용됩니다.

// export const Icon: FC<IconProps> = props => {
//   const name = { props };
//   return <span className="material-icons" />;
// };
// 이 버전은 `FC` 타입을 사용하면서, props 객체를 받아서 `name`을 잘못 설정하고 있습니다.
// `name`을 `props` 전체 객체로 설정했기 때문에, 실제로 사용할 수 없습니다.
// 이로 인해 아이콘 이름이 표시되지 않고, 빈 `span`만 렌더링됩니다.

// export const Icon: FC<IconProps> = ({name, style}) => {
//   return (
//     <span className="material-icons" style={style}>
//       {name}
//     </span>
//   );
//`FC` 타입을 사용하여 `Icon` 컴포넌트를 정의하는 가장 일반적인 방식입니다.
// 구조 분해 할당을 통해 `name`을 받아와 `span` 태그 내부에 렌더링합니다.
// 이로써 `name`에 해당하는 Material Icon이 화면에 표시됩니다.
// `style`은 선택적으로 `CSSProperties` 타입을 사용하여, `span` 태그에 인라인 스타일을 적용합니다.

// export const Icon: FC<IconProps> = ({name, ...props}) => {
//   // `Icon` 컴포넌트를 `FC` 타입으로 정의하여 `IconProps` 타입의 props를 받습니다.
//   // `name`은 아이콘의 이름을 나타내며, 나머지 props는 `...props`로 구조 분해 할당을 통해 추출합니다.
//   // `...props`는 `style`이나 `onClick` 등 추가적인 속성을 받기 위해 사용됩니다.

//   return (
//     <span className="material-icons" {...props}>
//       {name}
//     </span>
//   );
// };
// `span` 태그에 `className`을 설정하여 `material-icons` 클래스를 적용하고,
// `{...props}`를 사용해 `Icon` 컴포넌트에 전달된 모든 추가 속성을 `span` 태그에 전달합니다.
// 이렇게 하면 `style`, `onClick` 등 다양한 속성을 컴포넌트 외부에서 쉽게 지정할 수 있습니다.
// `name`은 `span`의 자식 요소로 렌더링되어 실제 아이콘 이름을 표시합니다.

export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
  // `className`을 `_className`이라는 이름으로 받아오고, 기존 `material-icons` 클래스와 함께 병합합니다.
  const className = ['material-icons', _className].join(' ');
  // `material-icons` 클래스를 기본으로 하고, 전달된 `_className`을 추가하여 최종 `className`을 구성합니다.
  // 이로 인해 외부에서 추가한 클래스도 함께 적용될 수 있습니다.

  return (
    <span className={className} {...props}>
      {name}
    </span>
  );
  // `span` 태그에 `className`을 적용하고, `props`를 통해 전달된 추가 속성들을 전달합니다.
  // `name`은 `span`의 내용으로 렌더링되어 지정된 아이콘 이름을 표시합니다.
};
