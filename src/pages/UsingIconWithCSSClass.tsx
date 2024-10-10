import {Icon} from '../components';

function UsingIconWithCSSClass() {
  return (
    <div>
      <h3>UsingWithCSSClass</h3>
      <Icon name="home" className="text-blue" />
      <Icon name="check_circle_outline" className="text-red" style={{fontSize: '50px'}} />
    </div>
  );
}
export default UsingIconWithCSSClass;
