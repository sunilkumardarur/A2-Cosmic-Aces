import json,os
D=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','data')
L=lambda n:json.load(open(os.path.join(D,n),encoding='utf-8'))
b=L('bosses.json')['bosses'];s=L('stages.json')['stages'];sh=L('shop.json');cr=L('credits.json');ac=L('achievements.json')
ids=[x['id'] for x in b]
assert len(b)==40 and ids==list(range(1,11))+list(range(21,31))+list(range(41,51))+list(range(61,71)),'40 bosses'
assert len({x['name'] for x in b})==40,'unique names'
assert len(s)==100,'100 stages'
for x in s:
    n=x['stage']
    if n>80:
        k=n-80 if n<=90 else 40+n-90; assert x['boss_ids']==[k,k+20],n
    else: assert len(x['boss_ids'])==1
    assert x['mini_boss']['hp']>0 and x['mini_boss']['reward_credits']==0
assert s[80]['boss_ids']==[1,21] and s[90]['boss_ids']==[41,61] and s[91]['boss_ids']==[42,62]
assert sum(x['first_clear_credits']['total'] for x in s)==25300==cr['all_100_stages_total']
assert sum(i['total'] for i in sh['items'])==15500==sh['total_cost_all'] and len(sh['items'])==8
assert ac['total']==600 and len(ac['items'])==12
for x in b:
    assert x['hp_mk2']==int(x['hp_mk1']*1.5)
    assert x['phases']==[2,3,3,4][x['tier']-1] or x['id']==4,x['id']
    for p in x['art'].values(): assert os.path.exists(os.path.join(D,'..',p)),p
assert [x for x in b if x['id']==70][0]['phases']==4
assert len(L('powerups.json')['items'])==9 and len(L('jets.json')['jets'])==4 and len(L('pilots.json')['pilots'])==2
bal=L('balance.json'); assert set(bal['jets'])=={j['id'] for j in L('jets.json')['jets']}
assert sum(bal['drops']['weights'].values())==100
w=L('waves.json')['stages']; assert len(w)==100
sc=L('save_schema.json'); assert 'array[100]' in sc['profile']['stars']
assert L('profiles.json')['max_profiles_per_device']==4
for k,v in L('stage_themes.json')['stage_themes'].items(): assert v['mini_boss']['hp'],k
sec=L('sectors.json')['sectors']; assert len(sec)==10 and all(len(x['stage_ids'])==10 for x in sec)
assert sum(x['first_clear_credits_total'] for x in sec)==25300
assert all(x['sector']==(x['stage']-1)//10+1 for x in s)
th=L('stage_themes.json')['stage_themes']
assert all(str(x['theme_ref']) in th for x in s)
print('ALL DATA CHECKS PASSED')
