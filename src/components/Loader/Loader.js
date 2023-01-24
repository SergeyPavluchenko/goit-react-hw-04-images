import { Component } from 'react';
import { Oval } from 'react-loader-spinner';
import { Loader } from 'components/Loader/Loader.styled';

export class Spinner extends Component {
  render() {
    return (
      <Loader>
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </Loader>
    );
  }
}
