import './dashboard_ctrl';
import './time_srv';
import './repeat_option/repeat_option';
import './dashgrid/DashboardGridDirective';
import './dashgrid/RowOptions';
import './panellinks/module';

// Services
import './services/DashboardViewStateSrv';
import './services/UnsavedChangesSrv';
import './services/DashboardLoaderSrv';
import './services/DashboardSrv';

// Components
import './components/DashLinks';
import './components/DashExportModal';
import './components/DashNav';
import './components/ExportDataModal';
import './components/FolderPicker';
import './components/VersionHistory';
import './components/DashboardSettings';
import './components/SubMenu';
import './components/TimePicker';
import './components/UnsavedChangesModal';
import './components/SaveModals';
import './components/ShareModal';
import './components/AdHocFilters';

import DashboardPermissions from './components/DashboardPermissions/DashboardPermissions';

// angular wrappers
import { react2AngularDirective } from 'app/core/utils/react2angular';

react2AngularDirective('dashboardPermissions', DashboardPermissions, ['dashboardId', 'folder']);

