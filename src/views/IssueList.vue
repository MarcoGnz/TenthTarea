<template>
    <div class="about">
        <h1>Lista de problemas</h1>
        <button @click="getIssues()">Obtener Issues</button> |
        <button @click="x()">Borrar</button>
        <el-row :gutter="12">
            <el-col :span="12" v-for="issue in issues" :key="issue.id">
                <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
                    <el-row :gutter="12">
                        <!-- Código 2. -->
                        <el-col :span="21">{{ issue.title }}</el-col>
                        <el-col :span="3">
                            <el-button @click="closeIssue(issue.number)" type="success" icon="el-icon-check" circle></el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios';


// La base del endpoint y las cabeceras de la solicitud se objetivan juntas y se asignan a constantes
const client = axios.create({  //--1
    baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`, //--2
    headers: { //--3
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`
    },
})

export default {
    name: 'IssueList',

    data() {
        return {
            issues: []
        }
    },

    methods: {
        getIssues() {
            // Llamar a get() desde las constantes del cliente
            client.get('/issues') //--4
                .then((res) => {
                    this.issues = res.data;
                })
        },

        x() {
            this.issues = []
        },

        closeIssue(number) {
            client.patch(`/issues/${number}`, // --Código 2.
                {
                    state: 'closed'
                },
            )
                .then(() => {
                    this.issues.some((v, i) => { // --Código 3.
                        if (v.number == number) this.issues.splice(i, 1); // --Código 4.
                    })
                })
        },
    }
}
</script>