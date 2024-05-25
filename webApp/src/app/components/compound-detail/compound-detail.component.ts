import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css']
})
export class CompoundDetailComponent implements OnInit {
  compound: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const compoundId = this.route.snapshot.paramMap.get('id');
    console.log(compoundId)
    this.http.get(`http://localhost:8080/api/compounds/getoneCompound/?id=${compoundId}`)
      .subscribe(data => {
        this.compound = data;
      });
  }
}
