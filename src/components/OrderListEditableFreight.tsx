import './OrderList.scss';
import { useState } from 'react';
import { useOrderEditMutation } from './__generated__/OrderEditMutation';
import { LoadingOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

interface Props {
  record: { freight?: number; _id: string };
}

export function OrderListEditableFreight({ record }: Props) {
  const [freight, setFreight] = useState(`${record?.freight || 0}`);
  const [editable, setEditable] = useState(false);
  const toggleEditable = () => {
    setFreight(`${record?.freight || 0}`);
    setEditable(!editable);
  };

  const [save, { loading }] = useOrderEditMutation({
    variables: {
      _id: record._id,
      record: {
        freight: parseFloat(freight),
      },
    },
    onCompleted: () => {
      setEditable(false);
    },
  });

  if (editable) {
    return (
      <div className="tableFreightEdit">
        <input
          className="intInput"
          defaultValue={freight}
          onChange={(e) => setFreight(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') save();
          }}
          disabled={loading}
        />
        {loading ? (
          <LoadingOutlined />
        ) : (
          <>
            <CheckCircleOutlined
              twoToneColor="#52c41a"
              onClick={() => save()}
            ></CheckCircleOutlined>
            <CloseCircleOutlined
              twoToneColor="#eb2f96"
              onClick={toggleEditable}
            ></CloseCircleOutlined>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="tableFreightCell" onClick={toggleEditable}>
      {record?.freight}
    </div>
  );
}
