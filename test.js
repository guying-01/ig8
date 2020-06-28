var dimenMap = {
  industry:'行业分类',
  province:'省份地区',
  startDate:'成立年限',
  searchIndex:'查找范围',
  statusCode:'企业状态',
  registfund:'注册资本',
  currencyCode:'资本类型',
  coyType:'企业类型',
  searchType:'组织机构',
  insured:'参保人数',
  roundLevel:'融资信息',
  listingStatus:'上市状态'
}

var filtersData = {
  searchKey:'',
  industry:[],
  province:[],
  coyType:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'有限责任公司',
          value:'10',
          checked:false
      },{
          name:'股份有限公司',
          value:'20',
          checked:false
      },{
          name:'国企',
          value:'30',
          checked:false
      },{
          name:'外商投资企业',
          value:'40',
          checked:false
      },{
          name:'独资企业',
          value:'50',
          checked:false
      },{
          name:'个体工商户',
          value:'70',
          checked:false
      },{
          name:'联营企业',
          value:'80',
          checked:false
      },{
          name:'集体所有制',
          value:'90',
          checked:false
      },{
          name:'有限合伙',
          value:'100',
          checked:false
      },{
          name:'普通合伙',
          value:'110',
          checked:false
      }
  ],
  searchIndex:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'企业名',
          value:'name',
          checked:false
      },{
          name:'法人或股东',
          value:'opername',
          checked:false
      },{
          name:'高管',
          value:'employeelist',
          checked:false
      },{
          name:'品牌/产品',
          value:'featurelist',
          checked:false
      },{
          name:'联系地址',
          value:'address',
          checked:false
      },{
          name:'经营范围',
          value:'scope',
          checked:false
      }
  ],
  searchType:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'大陆企业',
          value:'0,4,10,11,12',
          checked:false
      },{
          name:'社会组织',
          value:'1',
          checked:false
      },{
          name:'香港企业',
          value:'3',
          checked:false
      },{
          name:'台湾企业',
          value:'5',
          checked:false
      },{
          name:'基金会',
          value:'10',
          checked:false
      },{
          name:'事业单位',
          value:'11',
          checked:false
      },{
          name:'律师事务所',
          value:'12',
          checked:false
      }
  ],
  statusCode:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'在业/存续',
          value:'10',
          checked:false
      },{
          name:'筹建',
          value:'30',
          checked:false
      },{
          name:'清算',
          value:'40',
          checked:false
      },{
          name:'迁入',
          value:'50',
          checked:false
      },{
          name:'迁出',
          value:'60',
          checked:false
      },{
          name:'停业',
          value:'70',
          checked:false
      },{
          name:'撤销',
          value:'80',
          checked:false
      },{
          name:'吊销',
          value:'90',
          checked:false
      },{
          name:'注销',
          value:'99',
          checked:false
      }
  ],
  startDate:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'1年内',
          value:'0-1',
          checked:false
      },{
          name:'1-3年',
          value:'1-3',
          checked:false
      },{
          name:'3-5年',
          value:'3-5',
          checked:false
      },{
          name:'5-10年',
          value:'5-10',
          checked:false
      },{
          name:'10年以上',
          value:'10-0',
          checked:false
      },{
          name:'自定义',
          value:'',
          x:true,
          checked:false
      }
  ],
  registfund:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'100万以内',
          value:'0-100',
          checked:false
      },{
          name:'100-500万',
          value:'100-500',
          checked:false
      },{
          name:'500-1000万',
          value:'500-1000',
          checked:false
      },{
          name:'1000-3000万',
          value:'1000-3000',
          checked:false
      },{
          name:'3000-5000万',
          value:'3000-5000',
          checked:false
      },{
          name:'5000万以上',
          value:'5000-999999999',
          checked:false
      },{
          name:'自定义',
          value:'',
          x:true,
          checked:false
      }
  ],
  currencyCode:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'人民币',
          value:'CNY',
          checked:false
      },{
          name:'美元',
          value:'USD',
          checked:false
      },{
          name:'其它',
          value:'OTHER',
          checked:false
      }
  ],
  insured:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'5人以下',
          value:'0-5',
          checked:false
      },{
          name:'5-10人',
          value:'5-10',
          checked:false
      },{
          name:'10-20人',
          value:'10-20',
          checked:false
      },{
          name:'20-100人',
          value:'20-100',
          checked:false
      },{
          name:'100-500人',
          value:'100-500',
          checked:false
      },{
          name:'500-1000人',
          value:'500-1000',
          checked:false
      },{
          name:'1000人以上',
          value:'1000-99999',
          checked:false
      },{
          name:'自定义',
          value:'',
          x:true,
          checked:false
      }
  ],
  roundLevel:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'天使/种子轮',
          value:'1',
          checked:false
      },{
          name:'Pre-A 至 A+轮',
          value:'2',
          checked:false
      },{
          name:'Pre-B 至 B+轮',
          value:'3',
          checked:false
      },{
          name:'C轮及以上',
          value:'4',
          checked:false
      },{
          name:'收购/并购/被并购',
          value:'6',
          checked:false
      },{
          name:'战略投资',
          value:'7',
          checked:false
      },{
          name:'其他',
          value:'8',
          checked:false
      }
  ],
  listingStatus:[
      {
          name:'全部',
          value:'',
          all:true,
          checked:false
      },{
          name:'A股',
          value:'2',
          checked:false
      },{
          name:'中概股',
          value:'7',
          checked:false
      },{
          name:'港股',
          value:'6',
          checked:false
      },{
          name:'科创板',
          value:'501',
          checked:false
      },{
          name:'新三板',
          value:'1',
          checked:false
      }
  ],
  advance: [
      {
          key:'tel',
          name:'联系电话',
          selected:null,
          drops:[
              {name:'有联系电话',value:'T'},
              {name:'无联系电话',value:'N_T'}
          ]
      },
      {
          key:'phone',
          name:'手机号码',
          selected:null,
          drops:[
              {name:'有手机号码',value:'MN'},
              {name:'无手机号码',value:'N_MN'}
          ]
      },
      {
          key:'email',
          name:'联系邮箱',
          selected:null,
          drops:[
              {name:'有联系邮箱',value:'E'},
              {name:'无联系邮箱',value:'N_E'}
          ]
      },
      {
          key:'gwebsite',
          name:'网址信息',
          selected:null,
          drops:[
              {name:'有网址信息',value:'GW'},
              {name:'无网址信息',value:'N_GW'}
          ]
      },
      {
          key:'tax',
          name:'纳税信用',
          selected:null,
          drops:[
              {name:'A级',value:'TA'},
              {name:'非A级',value:'N_TA'}
          ]
      },
      {
          key:'mark',
          name:'商标信息',
          selected:null,
          drops:[
              {name:'有商标信息',value:'M'},
              {name:'无商标信息',value:'N_M'}
          ]
      },
      {
          key:'patent',
          name:'专利信息',
          selected:null,
          drops:[
              {name:'有专利信息',value:'P'},
              {name:'无专利信息',value:'N_P'}
          ]
      },

      {
          key:'zzq',
          name:'作品著作权',
          selected:null,
          drops:[
              {name:'有作品著作权',value:'C'},
              {name:'无作品著作权',value:'N_C'}
          ]
      },
      {
          key:'rjzzq',
          name:'软件著作权',
          selected:null,
          drops:[
              {name:'有软件著作权',value:'SC'},
              {name:'无软件著作权',value:'N_SC'}
          ]
      },
      {
          key:'gxjs',
          name:'高新企业',
          selected:null,
          drops:[
              {name:'高新技术企业',value:'GX'},
              {name:'非高新技术企业',value:'N_GX'}
          ]
      },
      {
          key:'tender',
          name:'招投标',
          selected:null,
          drops:[
              {name:'有招投标',value:'TE'},
              {name:'无招投标',value:'N_TE'}
          ]
      },
      {
          key:'ciax',
          name:'进出口信用',
          selected:null,
          drops:[
              {name:'有进出口信用',value:'CI'},
              {name:'无进出口信用',value:'N_CI'}
          ]
      },

      {
          key:'nsr',
          name:'一般纳税人',
          selected:null,
          drops:[
              {name:'是一般纳税人',value:'GT'},
              {name:'非一般纳税人',value:'N_GT'}
          ]
      },
      {
          key:'app',
          name:'APP应用',
          selected:null,
          drops:[
              {name:'有APP应用',value:'APP'},
              {name:'无APP应用',value:'N_APP'}
          ]
      },
      {
          key:'wp',
          name:'小程序',
          selected:null,
          drops:[
              {name:'有小程序',value:'WP'},
              {name:'无小程序',value:'N_WP'}
          ]
      },
      {
          key:'zhuanli',
          name:'专利类型',
          selected:null,
          drops:[
              {name:'发明公布',value:'1'},
              {name:'发明授权',value:'2'},
              {name:'实用新型',value:'3'},
              {name:'外观设计',value:'4'}
          ]
      },
      {
          key:'bm',
          name:'建筑资质',
          selected:null,
          drops:[
              {name:'有建筑资质',value:'BM'},
              {name:'无建筑资质',value:'N_BM'}
          ]
      },
      {
          key:'cr',
          name:'变更信息',
          selected:null,
          drops:[
              {name:'有变更信息',value:'CR'},
              {name:'无变更信息',value:'N_CR'}
          ]
      },
      {
          key:'zzzs',
          name:'资质证书',
          selected:null,
          drops:[
              {name:'进网许可证',value:'C_211_A'},
              {name:'排污许可证',value:'EM001'},
              {name:'采矿权许可证',value:'MN001'},
              {name:'高新技术企业',value:'HT001'},
              {name:'金融许可证',value:'JR001'},
              {name:'食品经营许可证',value:'FB001'},
              {name:'商业特许经营备案',value:'CF001'}
          ]
      },
      {
          key:'qauth',
          name:'企查查认证',
          selected:null,
          drops:[
              {name:'已认证',value:'QAUTH'},
              {name:'未认证',value:'N_QAUTH'}
          ]
      },
      {
          key:'enp',
          name:'环保处罚',
          selected:null,
          drops:[
              {name:'有环保处罚',value:'ENP'},
              {name:'无环保处罚',value:'N_ENP'}
          ]
      },
      {
          key:'aop',
          name:'行政处罚',
          selected:null,
          drops:[
              {name:'有行政处罚',value:'AOP'},
              {name:'无行政处罚',value:'N_AOP'}
          ]
      },
      {
          key:'mpledge',
          name:'动产抵押',
          selected:null,
          drops:[
              {name:'有动产抵押',value:'MP'},
              {name:'无动产抵押',value:'N_MP'}
          ]
      },
      {
          key:'shixin',
          name:'失信信息',
          selected:null,
          drops:[
              {name:'有失信信息',value:'S'},
              {name:'无失信信息',value:'N_S'}
          ]
      },
      {
          key:'liqu',
          name:'清算信息',
          selected:null,
          drops:[
              {name:'有清算信息',value:'LQ'},
              {name:'无清算信息',value:'N_LQ'}
          ]
      },
  ]
}

Vue.directive('scroll', function(el, binding, vnode, oldVnode) {
  $(el).slimScroll({
      wheelStep: 2,
      height:270,
  });
})
var app = new Vue({
  created: function () {
      $('#adsearchRow').show();
      $('#adsearchBottomContent').show();
      this.getPlist();
      this.getState();
      this.setData();
  },
  mounted: function() {
      this.initDaterangepicker();
      this.initFundRange();
      this.initInsuredRange();
  },
  data: {
      filters:filtersData,
      params:{},
      postData:{},
      commonFileds:['coyType','searchIndex','searchType','statusCode','startDate','registfund','currencyCode','insured','roundLevel','listingStatus'],
      filterTexts:[],
      hiddenAll:true,
      subIndustry:null,
      thirdIndustry:null,
      industryDropWidth:'200px',
      industryHoverItem:null,
      subIndustryHoverItem:null,
      cityList:null,
      countyList:null,
      countyDropWidth:'200px',
      provinceHoverItem:null,
      cityHoverItem:null,
      industryDesc:'全部行业',
      countryDesc:'全部地区',
      dataCount:0,
      dataLoaded:false,
      stateParams:{},
      plist:[],
      pobjectName:'',
      currentpobject:null,
  },
  watch:{
      filters: {
          deep: true,
          handler: debounce(function (){
              var that = this;
              this.gParams();
              this.handlerData();           
              this.getData();
              this.saveState();
          },200)
      }
  },
  methods: {
      getData: function () {
          if(this.hasFilter()){
              var that = this;
              if(userGroupid==43){
                  $.ajax({
                      url:INDEX_URL+'/search_adsearchmultilist?ajax=1',
                      method:'post',
                      data:this.postData,
                      dataType:'json',
                      success:function(rs){
                          if(rs.success === false && rs.url){
                              window.location.href = rs.url;
                              return false;
                          }
                          that.dataCount = rs.count;
                          that.dataLoaded = true;
                      }
                  })
              }
              else{
                  that.dataCount = '?';
                  that.dataLoaded = true;
                  //showVipModal('多选搜索功能','成为VIP会员 即可查询企业状态、电话、邮箱、商标、专利、融资、上市等多选搜索','default',null,null,false);
              }
          }else{
              this.dataCount = 0;
              this.dataLoaded = false;
          }
      },
      setData: function () {
          this.filters.searchKey = this.stateParams.searchKey||'';
          this.industryData();
          this.countyData();
          this.commonData();
          this.advanceData();
      },
      industryHover: function (item ,level) {
          if(level==1){
              this.industryHoverItem = item;
              this.subIndustry = item.list;
              this.industryDropWidth = '402px'
              this.thirdIndustry = null
          }else{
              this.subIndustryHoverItem = item;
              this.thirdIndustry = item.list;
              this.industryDropWidth = '603px'
          }
      },
      countyHover: function (item ,level) {
          if(level==1){
              this.provinceHoverItem = item;
              if(item.list.length){
                  this.cityList = item.list;
                  this.countyDropWidth = '402px';
                  this.countyList = null;
              }else{
                  this.countyDropWidth = '200px';
                  this.cityList = null;
                  this.countyList = null;
              }
          }else{
              if(item.list.length){
                  this.cityHoverItem = item;
                  this.countyList = item.list;
                  this.countyDropWidth = '603px';
              }   
          }
      },
      industryClick: function (list, item ,level, e){
          if(!item.checked && this.checkLimit(this.filters.industry,e,'industry')) return;
          item.checked = e.srcElement.checked;
          this.chainChange(list, item ,level);
          if(level==2){
              this.industryHoverItem.checked =  this.listCheckedStatus(this.industryHoverItem.list);
          }else if(level==3){
              this.subIndustryHoverItem.checked =  this.listCheckedStatus(this.subIndustryHoverItem.list);
              this.industryHoverItem.checked =  this.listCheckedStatus(this.industryHoverItem.list);
          }
          zhugeTrack('多选搜索条件筛选',{'筛选项':'行业筛选','筛选值':item.name});
          if(level==1){
              zhugeTrack('多选搜索行业筛选',{'筛选值':'一级行业'});
          }else if(level==2){
              zhugeTrack('多选搜索行业筛选',{'筛选值':'二级行业'});
          }else{
              zhugeTrack('多选搜索行业筛选',{'筛选值':'三级行业'});
          }
          
          
      },
      countyClick: function (list, item ,level, e){
          if(!item.checked && this.checkLimit(this.filters.province,e,'county')) return;
          item.checked = e.srcElement.checked;
          this.chainChange(list, item ,level);
          if(level==2){
              this.provinceHoverItem.checked =  this.listCheckedStatus(this.provinceHoverItem.list);
          }else if(level==3){
              this.cityHoverItem.checked =  this.listCheckedStatus(this.cityHoverItem.list);
              this.provinceHoverItem.checked =  this.listCheckedStatus(this.provinceHoverItem.list);
          }
          zhugeTrack('多选搜索条件筛选',{'筛选项':'省份地区','筛选值':item.name});
          if(level==1){
              zhugeTrack('多选搜索地域筛选',{'筛选值':'省份'});
          }else if(level==2){
              zhugeTrack('多选搜索地域筛选',{'筛选值':'城市'});
          }else{
              zhugeTrack('多选搜索地域筛选',{'筛选值':'区县'});
          }
      },
      commonClick: function (field, item, e) {
          var list = this.filters[field];
          if(field!='startDate' && field!='registfund'){
              if(!item.checked && this.checkLimit(list,e,field)) return;
          }
          item.checked = e.srcElement.checked;
          if(item.all){
              $.each(list,function(i,v){
                  v.checked = item.checked;
              })
          }else if(list[0].all){
              list[0].checked = this.listCheckedStatus(list);
          }
          if(field=='startDate' && item.checked && !item.value){
              setTimeout(function() {
                  $('#startDateRange').data('daterangepicker').show();
              }, 300);
              
          }
          if(field=='registfund' && item.checked && !item.value){
              setTimeout(function() {
                  $('#registfundRange').dropdown('toggle');
              }, 300);
          }
          zhugeTrack('多选搜索条件筛选',{'筛选项':dimenMap[field],'筛选值':item.name})
      },
      adFilterClick: function (item, dropV) {
          item.selected = dropV;
          zhugeTrack('多选搜索条件筛选',{'筛选项':item.name,'筛选值':item.selected.name})
      },
      chainChange: function (list, item ,level){
          if(level<=2){
              $.each(item.list,function(index,item2){
                  item2.checked = item.checked
                  if(level==1){
                      $.each(item2.list,function(index,item3){
                          item3.checked = item.checked
                      })
                  }
              })
          } 
      },
      gParams: function () {
          var that = this;
          this.params = {};
          this.params.searchKey = this.filters.searchKey;
          //行业
          var industry = [];
          $.each(this.filters.industry,function(index,item1){
              if(item1.checked==1){
                  industry.push({
                      name:item1.name,
                      code:item1.code,
                      level:1
                  });
              }else if(item1.checked==-1){
                  $.each(item1.list,function(index,item2){
                      if(item2.checked==1){
                          industry.push({
                              name:item2.name,
                              code:item2.code,
                              level:2
                          });
                      }else if(item2.checked==-1){
                          $.each(item2.list,function(index,item3){
                              if(item3.checked){
                                  industry.push({
                                      name:item3.name,
                                      code:item3.code,
                                      level:3
                                  });
                              }
                          });
                      }   
                  });
              }
          });
          if(industry.length){
              this.industryDesc = '已选'+industry.length+'项';
          }else{
              this.industryDesc = '全部行业';
          }
          this.params.industry = industry;

          //地区
          var province = [];
          $.each(this.filters.province,function(index,item1){
              if(item1.checked==1){
                  province.push({
                      name:item1.name,
                      pr:item1.code,
                      level:1
                  });
              }else if(item1.checked==-1){
                  $.each(item1.list,function(index,item2){
                      if(item2.checked==1){
                          province.push({
                              name:item2.name,
                              pr:item1.code,
                              code:item2.code,
                              level:2
                          });
                      }else if(item2.checked==-1){
                          $.each(item2.list,function(index,item3){
                              if(item3.checked){
                                  province.push({
                                      name:item3.name,
                                      pr:item1.code,
                                      code:item3.code,
                                      level:3
                                  });
                              }
                          });
                      }   
                  });
              }
          });
          if(province.length){
              this.countryDesc = '已选'+province.length+'项';
          }else{
              this.countryDesc = '全部地区';
          }
          this.params.province = province;

          $.each(this.commonFileds,function(index,field){
              var arr = [];
              $.each(that.filters[field],function(index,item){
                  if(!item.all && item.checked){
                      var obj = {
                          name:item.name,
                          value:item.value
                      }
                      if(item.x){
                          obj.x = true;
                      }
                      arr.push(obj);
                  }
              })
              that.params[field] = arr;
          })

          //高级筛选
          var advance = [];
          $.each(this.filters.advance,function(index,item){
              if(item.selected){
                  advance.push({
                      key:item.key,
                      name:item.selected.name,
                      value:item.selected.value
                  })
              }
          })
          this.params.advance = advance;
      },
      handlerData: function () {
          var that = this;
          this.postData = {
              filter :{}
          }
          this.filterTexts = [];
          if(this.params.searchKey){
              this.postData.searchKey = this.params.searchKey;
              // this.filterTexts.push({
              //     name:'关键词：'+this.postData.searchKey,
              //     field:'searchKey'
              // });
          }
          if(this.params.industry && this.params.industry.length){
              var texts = [];
              var values = [];
              $.each(this.params.industry,function(index,vo){
                  texts.push(vo.name);
                  values.push(vo.code);
              })
              this.filterTexts.push({
                  name:'行业分类：'+texts.toString(),
                  field:'industry'
              });
              this.postData.filter.i = values;
          }
          if(this.params.province && this.params.province.length){
              var texts = [];
              var values = [];
              // $.each(this.params.province,function(index,vo){
              //     texts.push(vo.name);
              //     values.push({
              //         pr:vo.pr,
              //         cc:vo.code
              //     });
              // })

              var prs = {};
              $.each(this.params.province,function(index,vo){
                  texts.push(vo.name);
                  if(!prs[vo.pr]){
                      prs[vo.pr] = [];
                  }
                  if(vo.level>1){
                      prs[vo.pr].push(vo.code);
                  }
              })
              $.each(prs,function(key,value){
                  var vo = {pr:key};
                  if(value.length>0){
                      vo.cc = value;
                  }
                  values.push(vo);
              })
              this.filterTexts.push({
                  name:'省份地区：'+texts.toString(),
                  field:'country'
              });
              this.postData.filter.r = values;
          }

          if(this.params.searchIndex && this.params.searchIndex.length){
              var texts = [];
              var searchKey = {}
              $.each(this.params.searchIndex,function(index,vo){
                  texts.push(vo.name);
                  searchKey[vo.value] = that.params.searchKey;
              })
              this.filterTexts.push({
                  name:'查找范围：'+texts.toString(),
                  field:'searchIndex'
              });
              if(this.params.searchKey){
                  this.postData.searchKey = searchKey;
                  this.postData.searchIndex = 'multicondition';
              }  
          }
          if(this.params.startDate && this.params.startDate.length){
              var texts = [];
              var values = [];
              $.each(this.params.startDate,function(index,vo){
                  texts.push(vo.name);
                  //如果不是自定义或者自定义有值
                  if(!vo.x || vo.value){
                      var dArr = vo.value.split('-')
                      var start = dArr[1];
                      var end = dArr[0];
                      if(start==0){
                          start = '';
                      }else if(start.length!=8){
                          start = moment().subtract(parseInt(start),'years').format('YYYYMMDD');
                      }
                      if(end==0){
                          end = '';
                      }else if(end.length!=8){
                          end = moment().subtract(parseInt(end),'years').format('YYYYMMDD');
                      }
                      values.push({
                          start:start,
                          end:end
                      });
                  }   
              })
              this.filterTexts.push({
                  name:'成立日期：'+texts.toString(),
                  field:'startDate'
              });
              if(values.length>0){
                  this.postData.filter.d = values;
              }
          }

          if(this.params.statusCode && this.params.statusCode.length){
              var texts = [];
              var values = [];
              $.each(this.params.statusCode,function(index,vo){
                  texts.push(vo.name);
                  values.push(vo.value);
                  if(vo.value=='10'){
                      values.push('20');
                  }
              })
              this.filterTexts.push({
                  name:'企业状态：'+texts.toString(),
                  field:'statusCode'
              });
              this.postData.filter.s = values;
          }

          if(this.params.registfund && this.params.registfund.length){
              var texts = [];
              var values = [];
              $.each(this.params.registfund,function(index,vo){
                  texts.push(vo.name);
                  //如果不是自定义或者自定义有值
                  if(!vo.x || vo.value){
                      var rcArr = vo.value.split('-')
                      values.push({
                          min:rcArr[0],
                          max:rcArr[1]
                      });
                  }    
              })
              this.filterTexts.push({
                  name:'注册资本：'+texts.toString(),
                  field:'registfund'
              });
              if(values.length>0){
                  this.postData.filter.rc = values;
              }
          }

          if(this.params.currencyCode && this.params.currencyCode.length){
              var texts = [];
              var values = [];
              $.each(this.params.currencyCode,function(index,vo){
                  texts.push(vo.name);
                  values.push(vo.value);
              })
              this.filterTexts.push({
                  name:'资本类型：'+texts.toString(),
                  field:'currencyCode'
              });
              this.postData.filter.c = values;
          }

          if(this.params.coyType && this.params.coyType.length){
              var texts = [];
              var values = [];
              $.each(this.params.coyType,function(index,vo){
                  texts.push(vo.name);
                  values.push(vo.value);
              })
              this.filterTexts.push({
                  name:'企业类型：'+texts.toString(),
                  field:'coyType'
              });
              this.postData.filter.ct = values;
          }

          if(this.params.searchType && this.params.searchType.length){
              var texts = [];
              var values = [];
              $.each(this.params.searchType,function(index,vo){
                  texts.push(vo.name);
                  values.push(vo.value);
              })
              this.filterTexts.push({
                  name:'组织机构：'+texts.toString(),
                  field:'searchType'
              });
              this.postData.filter.st = values;
          }

          if(this.params.insured && this.params.insured.length){
              var texts = [];
              var values = [];
              $.each(this.params.insured,function(index,vo){
                  texts.push(vo.name);
                  var icArr = vo.value.split('-')
                  values.push({
                      min:icArr[0],
                      max:icArr[1]
                  });
              })
              this.filterTexts.push({
                  name:'参保人数：'+texts.toString(),
                  field:'insured'
              });
              this.postData.filter.ic = values;
          }

          if(this.params.roundLevel && this.params.roundLevel.length){
              var texts = [];
              var values = [];
              $.each(this.params.roundLevel,function(index,vo){
                  texts.push(vo.name);
                  values.push(vo.value);
              })
              this.filterTexts.push({
                  name:'融资信息：'+texts.toString(),
                  field:'roundLevel'
              });
              this.postData.filter.rl = values;
          }

          if(this.params.listingStatus && this.params.listingStatus.length){
              var texts = [];
              var values = [];
              $.each(this.params.listingStatus,function(index,vo){
                  texts.push(vo.name);
                  values.push(vo.value);
              })
              this.filterTexts.push({
                  name:'上市信息：'+texts.toString(),
                  field:'listingStatus'
              });
              this.postData.filter.ls = values;
          }

          if(this.params.advance && this.params.advance.length){
              var values = [];
              var tag = []
              $.each(this.params.advance,function(index,vo){
                  that.filterTexts.push({
                      name:vo.name,
                      field:'advance',
                      key:vo.key
                  });
                  if(vo.key=='gxjs'){
                      tag.push(vo.name);
                  }else{
                      values.push(vo.value);
                  }
              }) 
              this.postData.filter.f = values;
              this.postData.filter.t = tag;
          }

          this.postData.filter = JSON.stringify(this.postData.filter);
          if(this.postData.searchIndex=='multicondition'){
              this.postData.searchKey = JSON.stringify(this.postData.searchKey);
          }
      },
      hasFilter: function () {
          return this.postData.searchKey || (this.postData.filter && this.postData.filter != '{}');
      },
      clearFilter: function (ftext) {
          if(ftext){
              if(ftext.field=='advance'){
                  $.each(this.filters.advance,function(index,item){
                      if(item.key==ftext.key){
                          item.selected = null;
                      }
                  })
              }else if(ftext.field=='industry'){
                  this.stateParams.industry = [];
                  this.industryData();
              }else if(ftext.field=='country'){
                  this.stateParams.province = [];
                  this.countyData();
              }else{
                  $.each(this.filters[ftext.field],function(index,item){
                      item.checked = false;
                  })
              }
          }else{
              this.dataLoaded = false;
              this.clearState();
              this.setData();
          }
      },
      listCheckedStatus: function (list) {
          var allChecked = true;
          var nullChecked = true;
          $.each(list,function(index,item){
              if(item.all) return;
              if(item.checked==-1){
                  nullChecked = false;
                  allChecked = false;
              }
              else if(item.checked){
                  nullChecked = false;
              }else{
                  allChecked = false;
              }
             
          });
          if(allChecked){
              return 1;
          }else if(nullChecked){
              return 0;
          }else {
              return -1;
          }
      },
      checkLimit: function (list,e,field) {
          var checkedCount = 0;
          $.each(list,function(index,item){
              if(!item.all && item.checked){
                  checkedCount++;
              }
          });
          if(field=='industry'){
              if(checkedCount>=5 && !this.industryHoverItem.checked){
                  e.preventDefault();
                  faldia({'content':'最多同时选择5个行业分类'});
                  return true;
              }
          }else if(field=='county'){
              if(checkedCount>=5 && !this.provinceHoverItem.checked){
                  e.preventDefault();
                  faldia({'content':'最多同时选择5个省份'});
                  return true;
              }
          }else{
              if(checkedCount>=5){
                  e.preventDefault();
                  faldia({'content':'每项最多选择5个条件'});
                  return true;
              }
          }
          return false;
      },
      viewResult: function () {
          // if(this.params.searchIndex.length && !this.params.searchKey){
          //     faldia({'content':'请输入搜索关键词'});
          //     return;
          // }
          var startDateXItem = this.filters.startDate[this.filters.startDate.length-1];
          if(startDateXItem.checked && !startDateXItem.value){
              faldia({'content':'请输入成立日期'});
              return;
          }
          var registfundXItem = this.filters.registfund[this.filters.registfund.length-1];
          if(registfundXItem.checked && !registfundXItem.value){
              faldia({'content':'请输入注册资本'});
              return;
          }
          if(this.dataCount){
              this.postData.viewResult = true;
              this.postData.filterTexts = JSON.stringify(this.filterTexts);
              var url = INDEX_URL+'/search_adsearchmultilist';
              if(this.filters.searchKey){
                  url+="?key="+this.filters.searchKey
              }
              $.StandardPost(url,this.postData); 
          } 
      },
      //保存还原数据处理
      saveState: function () {
          if(this.hasFilter()){
              window.localStorage.setItem('admultiParam',JSON.stringify(this.params));
              window.location.hash = 'hasState';
          }else{
              this.clearState();
          }
      },
      getState: function () {
          if(window.location.hash == '#hasState'){
              var admultiParam = window.localStorage.getItem('admultiParam');
              if(admultiParam){
                  this.stateParams = JSON.parse(admultiParam);
              }
          }
      },
      clearState: function () {
          window.localStorage.setItem('admultiParam','');
          this.stateParams = {};
          window.location.hash = '';
      },
      commonData: function () {
          var that = this;
          $.each(this.commonFileds,function(index,field){
              var arr = [];
              $.each(filtersData[field],function(index,item){
                  that.mergeCommonData(item,that.stateParams[field],field);
                  arr.push(item)
              })
              that.filters[field] = arr;
          })
      },
      mergeCommonData: function (item,list,field) {
          item.checked = false;
          if(!list || list.length==0) return;
          $.each(list,function(index,vo){
              if(vo.name==item.name){
                  item.checked = true;
              }
              if(vo.x && item.x){
                  item.checked = true;
                  item.name = vo.name;
                  item.value = vo.value;
                  if(field=='startDate'){
                      setTimeout(function() {
                          if(item.value){
                              var icArr = item.value.split('-');
                              $('#startDateRange').data('daterangepicker').setEndDate(moment(icArr[0],'YYYYMMDD'));
                              $('#startDateRange').data('daterangepicker').setStartDate(moment(icArr[1],'YYYYMMDD'));
                          }           
                      }, 500);
                  }
                  if(field=='registfund'){
                      setTimeout(function() {
                          if(item.value){
                              var dArr = item.value.split('-')
                              $('#fundStart').val(dArr[0]);
                              $('#fundEnd').val(dArr[1]);
                          }
                      }, 500);
                  }
              }
          })
      },
      advanceData: function () {
          var that = this;
          var arr = [];
          $.each(filtersData.advance,function(index,item){
              that.mergeAdvanceData(item,that.stateParams.advance);
              arr.push(item)
          })
          this.filters.advance = arr;
      },
      mergeAdvanceData: function (item,list) {
          item.selected = null;
          if(!list || list.length==0) return;
          $.each(list,function(index,vo){
              if(vo.key==item.key){
                  $.each(item.drops,function(i,dropV){
                      if(dropV.value==vo.value){
                          item.selected = dropV;
                      }
                  })
              }
          })
      },
      industryData: function () {
          var that = this;
          var arr1 = []
          $.each(industry,function(index,item1){
              if(index==0) return;
              var arr2 = []
              $.each(item1.SubIndustryList,function(index,item2){
                  if(index==0) return;
                  var arr3 = [];
                  $.each(item2.SubIndustryList,function(index,item3){
                      if(index==0) return;
                      var item = {
                          name:item3.Name,
                          code:item3.Code,
                          checked:false
                      };
                      that.mergeChainData(item,that.stateParams.industry,3)
                      arr3.push(item)
                  })
                  var item = {
                      name:item2.Name,
                      code:item2.Code,
                      checked:false,
                      list:arr3
                  };
                  that.mergeChainData(item,that.stateParams.industry,2)
                  arr2.push(item)
              })
              var item = {
                  name:item1.Name,
                  code:item1.Code,
                  checked:false,
                  list:arr2
              }
              that.mergeChainData(item,that.stateParams.industry,1)
              arr1.push(item)
          })
          this.filters.industry = arr1;
          if(this.stateParams.industry && this.stateParams.industry.length){
              this.autoChain(this.filters.industry);
          }
          
      },
      countyData: function () {
          var that = this;
          var arr1 = []
          $.each(countyList,function(index,item1){
              if(index==0) return;
              var arr2 = []
              $.each(item1.list,function(index,item2){
                  if(index==0) return;
                  var arr3 = [];
                  $.each(item2.list,function(index,item3){
                      if(index==0) return;
                      var item = {
                          name:item3.name,
                          code:item3.code,
                          checked:false
                      }
                      that.mergeChainData(item,that.stateParams.province,3)
                      arr3.push(item)
                  })
                  var item = {
                      name:item2.name,
                      code:item2.code,
                      checked:false,
                      list:arr3
                  }
                  that.mergeChainData(item,that.stateParams.province,2)
                  arr2.push(item)
              })
              var item = {
                  name:item1.name,
                  code:item1.code,
                  checked:false,
                  list:arr2
              }
              that.mergeChainData(item,that.stateParams.province,1)
              arr1.push(item)
          })
          this.filters.province  = arr1;
          if(this.stateParams.province && this.stateParams.province.length){
              this.autoChain(this.filters.province);
          }
      },
      mergeChainData: function (item,list,level) {
          if(!list || list.length==0) return;
          $.each(list,function(index,vo){
              if(vo.name==item.name && vo.level== level){
                  item.checked = true;
              }
          })
      },
      autoChain: function(list,fucClick) {
          var that = this;
          $.each(list,function(index,item1){
              if(item1.checked){
                  that.chainChange(list,item1,1);
              }
              $.each(item1.list,function(index,item2){
                  if(item2.checked){
                      that.chainChange(item1.list,item2,2);
                      item1.checked =  that.listCheckedStatus(item1.list);
                  }
                  $.each(item2.list,function(index,item3){
                      if(item3.checked){
                          item2.checked =  that.listCheckedStatus(item2.list);
                          item1.checked =  that.listCheckedStatus(item1.list);
                      }
                  })
                  
              })
              
          })
      },
      initDaterangepicker: function() {
          var that = this;
          $('#startDateRange').daterangepicker({
              format: 'YYYY/MM/DD',
              maxDate : moment(),
              applyClass: "btn-info",
              showDropdowns: true,
          }, function(start, end) {});
          $('#startDateRange').on('apply.daterangepicker', function(ev, picker) { 
              var start = picker.startDate;
              var end = picker.endDate;
              var list = that.filters.startDate;
              var item = list[list.length-1];
              item.name = start.format('YYYY/MM/DD') + ' - ' + end.format('YYYY/MM/DD');
              item.checked = true;
              if(list[0].all){
                  list[0].checked = that.listCheckedStatus(list);
              }
              item.value = end.format('YYYYMMDD')+'-'+start.format('YYYYMMDD');
              //filterClick(start.format('YYYYMMDD')+'-'+end.format('YYYYMMDD'),'startDate',$('#startDateRange').parent()[0]);      
          });
      },
      initFundRange: function () {
          var that = this;
          $('.fundrange input').click(function(e){
              e.stopPropagation();
          });
          $('#fundBtn').click(function(e){
              var fundStart = $('#fundStart').val();
              var fundEnd = $('#fundEnd').val();
              var reg = /^[1-9]{1}[0-9]*$/;
              if(fundStart || fundEnd){
                  if((fundStart && !reg.test(fundStart)) || (fundEnd && !reg.test(fundEnd))){
                      faldia({'content':'注册资本数值不正确，只能输入整数'});
                      e.stopPropagation();
                  }else if(parseInt(fundStart)>parseInt(fundEnd) || parseInt(fundStart)<0){
                      faldia({'content':'注册资本范围不正确'});
                      e.stopPropagation();
                  }else if(parseInt(fundStart)>1000000 || parseInt(fundEnd)>1000000){
                      faldia({'content':'注册资本最多输入100亿'});
                      e.stopPropagation();
                  }else{
                      var text;
                      if(!fundStart){
                          text = fundEnd + '万以内'
                          $('#registfundRange .x').html();
                      }else if(!fundEnd){
                          text = '大于' + fundStart+'万';
                      }else{
                          text = fundStart + ' - ' + fundEnd+'万';
                      }
                      var list = that.filters.registfund;
                      var item = list[list.length-1];
                      item.name = text;
                      item.checked = true;
                      if(list[0].all){
                          list[0].checked = that.listCheckedStatus(list);
                      }
                      item.value = fundStart + '-' + fundEnd;
                      //console.info(item);
                      //filterClick(fundStart + '-' + fundEnd,'registfund',$('#registfundRange').parent()[0]); 
                  }
              }
          })
      },
      initInsuredRange: function () {
          var that = this;
          $('.insuredrange input').click(function(e){
              e.stopPropagation();
          });
          $('#insuredBtn').click(function(e){
              var insuredStart = $('#insuredStart').val();
              var insuredEnd = $('#insuredEnd').val();
              var reg = /^[1-9]{1}[0-9]*$/;
              if(insuredStart || insuredEnd){
                  if((insuredStart && !reg.test(insuredStart)) || (insuredEnd && !reg.test(insuredEnd))){
                      faldia({'content':'参保人数不正确，只能输入整数'});
                      e.stopPropagation();
                  }else if(parseInt(insuredStart)>parseInt(insuredEnd) || parseInt(insuredStart)<0){
                      faldia({'content':'参保人数范围不正确'});
                      e.stopPropagation();
                  }else if(parseInt(insuredStart)>1000000 || parseInt(insuredEnd)>1000000){
                      faldia({'content':'参保人数最多输入100万'});
                      e.stopPropagation();
                  }else{
                      var text;
                      if(!insuredStart){
                          text = insuredEnd + '人以内'
                          $('#insuredRange .x').html();
                      }else if(!insuredEnd){
                          text = '大于' + insuredStart+'人';
                      }else{
                          text = insuredStart + ' - ' + insuredEnd+'人';
                      }
                      var list = that.filters.insured;
                      var item = list[list.length-1];
                      item.name = text;
                      item.checked = true;
                      if(list[0].all){
                          list[0].checked = that.listCheckedStatus(list);
                      }
                      item.value = insuredStart + '-' + insuredEnd;
                      //console.info(item);
                      //filterClick(fundStart + '-' + fundEnd,'registfund',$('#registfundRange').parent()[0]); 
                  }
              }
          })
      },
      openPlistModal: function(pobject) {
          $('#plistSaveModal').modal('show');
          if(pobject){
            this.currentpobject = pobject;
            this.pobjectName = pobject.name;
          }else{  
            this.currentpobject = null;
            this.pobjectName = '';
          }
      },
      getPlist: function () {
          var that = this;
          $.ajax({
            type: 'get',
            url: INDEX_URL+'/search_getmultiplist',
            dataType:'json',
            success:function(rs){
              if(rs.data){
                  that.plist = rs.data.reverse();
              }
            }
          });
      },
      plistLoad: function (pobject) {
          this.stateParams = pobject.param;
          this.setData();
      },
      plistSave: function () {
          var that = this;
          if(this.plistSaving){
              return;
          }
          this.plistSaving = true;
          var data = {
              name:this.pobjectName,
              param:JSON.stringify(this.params)
          }
          if(this.currentpobject){
              data.id = this.currentpobject.id;
          }
          $.ajax({
            type: 'POST',
            url: INDEX_URL+'/search_plistmultisave',
            data: data,
            dataType:'json',
            success:function(rs){
              that.plistSaving = false;
              if(rs.success){
                  if(that.currentpobject){
                      that.currentpobject.name = rs.data.name;
                      that.currentpobject.time = rs.data.time;
                  }else{
                      that.plist.unshift(rs.data);
                  }
                  $('#plistSaveModal').modal('hide');
              }else{
                  faldia({'content':rs.msg});
              }
            }
          }) 
      },
      plistDel: function (pobject) {
          this.plist.remove(pobject);
          $.ajax({
            type: 'GET',
            url: INDEX_URL+'/search_plistmultidel',
            data: {pobjectId:pobject.id},
            dataType:'json',
            success:function(rs){
            }
          })
      },
      showVipModal: function (){
          showVipModal('多选搜索功能','成为VIP会员，即可立即体验多选搜索功能，让搜索更高效','default',null,null,false);
      }
  }
}).$mount('#adsearchApp');

function debounce(fn, wait) {
  var timer;
  return function () {
      clearTimeout(timer);
      var that = this;
      timer = setTimeout(function(){
          fn.call(that);
      }, wait);
  }
}

$('.nmulti-drop-col').on('click',function(e){
e.stopPropagation();
});
$('.nmulti-drop-col').on('mouseover',function(e){
e.stopPropagation();
});