import classnames from 'classnames';
import { observer } from 'mobx-react';
import { ReactNode } from 'react';
import { RoomDeviceSettingContainer } from '~containers/device-setting';
import { useStore } from '@/infra/hooks/ui-store';
import { Confirm } from './confirm';
import { GenericErrorDialog } from './error-generic';
import { KickOut } from './kick-out';
import { ScreenPickerDialog } from './screen-picker';
import { DialogCategory } from '@/infra/stores/common/share-ui';
import { Quit } from './quit';

const getDialog = (category: DialogCategory, id: string, props?: any): ReactNode => {
  switch (category) {
    case DialogCategory.KickOut:
      return <KickOut {...props} id={id} />;
    case DialogCategory.ErrorGeneric:
      // props should come after id so that props can override id
      return <GenericErrorDialog id={id} {...props} />;
    case DialogCategory.Confirm:
      return <Confirm {...props} id={id} />;
    case DialogCategory.DeviceSetting:
      return <RoomDeviceSettingContainer {...props} id={id} />;
    case DialogCategory.ScreenPicker:
      return <ScreenPickerDialog {...props} id={id} />;
    case DialogCategory.Quit:
      return <Quit {...props} id={id} />;
  }
};

export type BaseDialogProps = {
  id: string;
};

export const DialogContainer: React.FC<unknown> = observer(() => {
  const { shareUIStore } = useStore();
  const { dialogQueue } = shareUIStore;

  const cls = classnames({
    [`rc-mask`]: !!dialogQueue.length,
  });

  return (
    <div className={cls}>
      {dialogQueue.map(({ id, category, props }) => {
        return (
          <div key={id} className="fixed-container">
            {getDialog(category, id, props)}
          </div>
        );
      })}
    </div>
  );
});
