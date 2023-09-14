import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-answer-tab',
  templateUrl: './answer-tab.component.html',
  styleUrls: ['./answer-tab.component.css'],
})
export class AnswerTabComponent {
  answerArray: any[] = [];
  ansArray: any;
  EXCEL_TYPE =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION = '.xlsx';

  constructor(
    private adminService: AdminServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.adminService.getAnswer().subscribe((res: any) => {
      console.log(res);

      this.ansArray = res;
    });
    this.router.queryParams.subscribe((params: any) => {
      console.log(params);
      this.answerArray = [...this.ansArray].filter(
        (ele) => params.userID === ele.user._id
      );
      console.log(this.answerArray);
    });
  }
  public exportAsExcelFile(): void {
    console.log(this.ansArray);

    let jsonArray = this.ansArray.map((ele: any) => {
      return {
        fullName: ele.user.fullName,
        category: ele.category,
        question: ele.question,
        option: ele.option,
        mark: ele.mark,
        endTime: `${new Date(ele.time).getDate()}-${
          new Date(ele.time).getMonth() + 1
        }-${new Date(ele.time).getFullYear()}`,
      };
    });
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonArray);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, 'answer');
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + this.EXCEL_EXTENSION
    );
  }
}
