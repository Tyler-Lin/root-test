import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  title = 'My Application';

  // Mock data for side menu navigation links
  menuItems = [
    { name: '首頁', route: '/home' },
    { name: '儀表板', route: '/dashboard' },
    { name: '報表', route: '/reports' },
    { name: '設定', route: '/settings' },
    { name: '用戶管理', route: '/users' },
  ];
}
